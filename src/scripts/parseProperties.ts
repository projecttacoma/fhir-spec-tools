import * as fs from 'fs';
import * as path from 'path';

const STRUCTURE_DEFINITIONS_BASE_PATH = path.join(__dirname, '../fhir/resource-definitions');
const parsedPropertiesOutputPath = path.resolve(path.join(__dirname, '../data/propertyPaths.ts'));

/**
 * Parse the StructureDefinition of resource types supported by this server for properties associated with each type.
 * The StructureDefinitions of each resource type is found in the FHIR R4 spec
 * For example, the StructureDefinition for Encounter was found here: https://hl7.org/fhir/R4/encounter.profile.json.html
 * @returns {Object} object whose keys are resourceTypes and values are arrays of strings that are elements
 */
async function main() {
  const files = fs.readdirSync(STRUCTURE_DEFINITIONS_BASE_PATH).map(f => ({
    shortName: f.split('.profile')[0],
    fullPath: path.join(STRUCTURE_DEFINITIONS_BASE_PATH, f)
  }));

  const parsedPropertyPathsResults: Record<string, string[]> = {};

  files.forEach(f => {
    const properties: string[] = [];

    // read the contents of the file
    const structureDef = JSON.parse(fs.readFileSync(f.fullPath, 'utf8')) as fhir4.StructureDefinition;
    const resourceType = structureDef.id;
    if (!resourceType) return;

    structureDef.snapshot?.element.forEach(e => {
      const typeAndElement = e.id?.split('.');
      const notBaseElement = typeAndElement && typeAndElement.length === 2;
      // makes sure not to get element with same name as the resource type (Account has elem "Account")
      if (notBaseElement) {
        const elem = typeAndElement[1];
        elem.endsWith('[x]')
          ? e.type?.forEach(type =>
              properties.push(elem.split('[')[0] + type.code[0].toUpperCase().concat(type.code.slice(1)))
            )
          : properties.push(elem);
      }
    });
    parsedPropertyPathsResults[resourceType] = properties;
  });
  return parsedPropertyPathsResults;
}

main()
  .then(parsedPropertyPaths => {
    fs.writeFileSync(
      parsedPropertiesOutputPath,
      `
        export const parsedPropertyPaths: Record<string, string[]> =
          ${JSON.stringify(parsedPropertyPaths, null, 2)};
        `,
      'utf8'
    );
    console.log(`Wrote file to ${parsedPropertiesOutputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
