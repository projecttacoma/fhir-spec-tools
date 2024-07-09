import * as fs from 'fs';
import * as path from 'path';

const compartmentDefPath = path.resolve(path.join(__dirname, '../fhir/compartmentdefinition-patient.json'));
const searchParamPath = path.resolve(path.join(__dirname, '../fhir/search-parameters.json'));
const attrOutputPath = path.resolve(path.join(__dirname, '../data/patient-attribute-paths.json'));
const paramOutputPath = path.resolve(path.join(__dirname, '../data/patient-search-parameters.json'));
const jsonStr = fs.readFileSync(compartmentDefPath, 'utf8');
const searchParamStr = fs.readFileSync(searchParamPath, 'utf8');

/**
 * Parse Patient compartment definition for search parameter keywords
 * Rather than using node-fhir-server-core's getSearchParameters (previous functionality), parse through
 * search-parameters.json for a resource type's search parameters
 * @param {string} compartmentJson the string content of the patient compartment definition json file
 * @param {string} searchParamJson the string content of the search-parameters json file from https://hl7.org/fhir/R4/searchparameter-registry.html
 * @return {Object} object whose keys are resourceTypes and values are arrays of strings to use to reference a patient
 */
async function parse(compartmentJson: string, searchParamJson: string) {
  const compartmentDefinition = (await JSON.parse(compartmentJson)) as fhir4.CompartmentDefinition;
  const searchParamBundle = (await JSON.parse(searchParamJson)) as fhir4.Bundle;
  const searchParamArray = searchParamBundle.entry?.map(e => e.resource) as fhir4.SearchParameter[];
  const attrResults: Record<string, Array<string>> = {};
  const paramResults: Record<string, Array<string>> = {};

  compartmentDefinition.resource?.forEach(resourceObj => {
    if (resourceObj.param) {
      attrResults[resourceObj.code] = [];
      paramResults[resourceObj.code] = resourceObj.param;

      // get all of the search parameters whose .base attribute includes the resource type we are looking for
      // then filter those search parameters by name where name matches one of the parameters in the compartment
      // definition
      const searchParameterList = searchParamArray
        .filter(sp => sp.base.includes(resourceObj.code))
        .filter(sp => resourceObj.param?.includes(sp.name));

      searchParameterList.forEach(sp => {
        // there needs to be some fancy string manipulation here since some search parameters support multiple bases
        // Example: clinical-patient search parameter has expression "AllergyIntolerance.patient | CarePlan.subject.where(resolve() is Patient)..."
        // For the above case, we need to split on '|', find which string contains the resourceType we are looking for,
        // trim the white space from the start and end, and finally split based on 'resourceType.' this leaves us with
        // the desired "patient" or "subject.where(resolve() is Patient)"
        const formattedSearchParam = (sp.expression?.split('|') as string[])
          .find(e => e.includes(resourceObj.code))
          ?.trimStart()
          ?.trimEnd()
          ?.split(`${resourceObj.code}.`)[1];

        if (formattedSearchParam) {
          // finally, in the case of "subject.where(resolve() is Patient)", split on '.where'
          attrResults[resourceObj.code].push(formattedSearchParam.split('.where')[0]);
        }
      });
    }
  });
  return { attrResults, paramResults };
}

parse(jsonStr, searchParamStr)
  .then(data => {
    fs.writeFileSync(attrOutputPath, JSON.stringify(data.attrResults, null, 2), 'utf8');
    fs.writeFileSync(paramOutputPath, JSON.stringify(data.paramResults, null, 2), 'utf8');

    console.log(`Wrote file to ${attrOutputPath}`);
    console.log(`Wrote file to ${paramOutputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
