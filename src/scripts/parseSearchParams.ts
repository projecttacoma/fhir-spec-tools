import { SearchParameter } from 'fhir/r4';
import * as fs from 'fs';
import * as path from 'path';
import { parsedPropertyPaths } from '../data/propertyPaths';

const searchParameterPath = path.resolve(path.join(__dirname, '../fhir/search-parameters.json'));
const STRUCTURE_DEFINITIONS_BASE_PATH = path.join(__dirname, '../fhir/resource-definitions');

const outputPath = path.resolve(path.join(__dirname, '../data/searchParameters.ts'));

const jsonStr = fs.readFileSync(searchParameterPath, 'utf8');

/**
 * Parse search parameters for each resource and get type of each parameter
 * @param {string} compartmentJson the string content of the full set of search parameters
 * @return {Object} Record with each resource type and a record of search parameters associated with it and their types
 */
async function parse(searchParams: string) {
  const files = fs.readdirSync(STRUCTURE_DEFINITIONS_BASE_PATH).map(f => ({
    shortName: f.split('.profile')[0],
    fullPath: path.join(STRUCTURE_DEFINITIONS_BASE_PATH, f)
  }));
  const supportedResources = Object.keys(parsedPropertyPaths);

  const resourceInheritance: Record<string, string> = {};

  // Domain resource inherits resource from FHIR spec
  resourceInheritance['DomainResource'] = 'Resource';

  // Create inheritance pattern for each FHIR Resource type
  files.forEach(f => {
    const structureDef = JSON.parse(fs.readFileSync(f.fullPath, 'utf8')) as fhir4.StructureDefinition;
    const resourceType = structureDef.id;
    const baseDefinitionUrl = structureDef.baseDefinition;
    if (!resourceType || !baseDefinitionUrl) return;
    const baseResource = baseDefinitionUrl.slice(baseDefinitionUrl.lastIndexOf('/') + 1);
    resourceInheritance[resourceType] = baseResource;
  });

  const searchParamsBundle = (await JSON.parse(searchParams)) as fhir4.Bundle;

  // Search parameters record for base resources (DomainResource and Resource)
  const baseResourceSearchParams: Record<string, Record<string, string>> = {
    DomainResource: {},
    Resource: {}
  };

  // Create search parameters for base resource type (DomainResource and Resource)
  searchParamsBundle.entry?.forEach(entry => {
    const searchParam = entry.resource as SearchParameter;
    searchParam.base.forEach(resource => {
      // If not base resource skip
      if (supportedResources.includes(resource)) return;

      baseResourceSearchParams[resource][searchParam.code] = searchParam.type;
    });
  });

  // Final search parameters record
  const searchParameterResults: Record<string, Record<string, string>> = {};

  // Populate each resource with inherited search parameters
  supportedResources.forEach(resource => {
    const parentResource = resourceInheritance[resource];
    const grandparentResource = resourceInheritance[parentResource];

    searchParameterResults[resource] = {
      ...baseResourceSearchParams[parentResource],
      ...baseResourceSearchParams[grandparentResource]
    };
  });

  // Populate with search parameters associated with each resource type
  searchParamsBundle.entry?.forEach(entry => {
    const searchParam = entry.resource as SearchParameter;

    searchParam.base.forEach(resource => {
      // If base resource skip
      if (!supportedResources.includes(resource)) return;

      searchParameterResults[resource][searchParam.code] = searchParam.type;
    });
  });

  return searchParameterResults;
}

parse(jsonStr)
  .then(data => {
    fs.writeFileSync(
      outputPath,
      `  
  // Taken from https://hl7.org/fhir/R4/search-parameters.json
  // Includes search parameters for each resource type
  export const searchParameters: Record<string, Record<string, string>> =
    ${JSON.stringify(data, null, 2)};
            `,
      'utf8'
    );
    console.log(`Wrote file to ${outputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
