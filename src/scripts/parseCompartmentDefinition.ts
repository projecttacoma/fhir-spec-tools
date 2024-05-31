import * as fs from 'fs';
import * as path from 'path';

const compartmentDefPath = path.resolve(path.join(__dirname, '../fhir/compartmentdefinition-patient.json'));
const attrOutputPath = path.resolve(path.join(__dirname, '../data/patient-attribute-paths.json'));
const paramOutputPath = path.resolve(path.join(__dirname, '../data/patient-search-parameters.json'));
const jsonStr = fs.readFileSync(compartmentDefPath, 'utf8');
const { getSearchParameters } = require('@projecttacoma/node-fhir-server-core');

/**
 * Parse Patient compartment definition for search parameter keywords
 * @param {string} compartmentJson the string content of the patient compartment definition json file
 * @return {Object} object whose keys are resourceTypes and values are arrays of strings to use to reference a patient
 */
async function parse(compartmentJson: string) {
  const compartmentDefinition = (await JSON.parse(compartmentJson)) as fhir4.CompartmentDefinition;
  const attrResults: Record<string, Array<string>> = {};
  const paramResults: Record<string, Array<string>> = {};

  compartmentDefinition.resource?.forEach(resourceObj => {
    if (resourceObj.param) {
      attrResults[resourceObj.code] = [];
      paramResults[resourceObj.code] = resourceObj.param;
      const searchParameterList = getSearchParameters(resourceObj.code, '4_0_0').filter((objs: any) =>
        resourceObj.param?.includes(objs.name)
      );
      searchParameterList.forEach((obj: any) => {
        // retrieve xpath and remove resource type from beginning
        attrResults[resourceObj.code].push(obj.xpath.substr(obj.xpath.indexOf('.') + 1));
      });
    }
  });
  return { attrResults, paramResults };
}

parse(jsonStr)
  .then(data => {
    fs.writeFileSync(attrOutputPath, JSON.stringify(data.attrResults, null, 2), 'utf8');
    fs.writeFileSync(paramOutputPath, JSON.stringify(data.paramResults, null, 2), 'utf8');

    console.log(`Wrote file to ${attrOutputPath}`);
    console.log(`Wrote file to ${paramOutputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
