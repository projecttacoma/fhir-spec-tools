import * as fs from 'fs';
import * as path from 'path';

const STRUCTURE_DEFINITIONS_BASE_PATH = path.join(__dirname, '../fhir/resource-definitions');
const nonMandatoryElemsOutputPath = path.resolve(path.join(__dirname, '../data/nonMandatoryElements.ts'));

/**
 * Parse the StructureDefinition of resource types supported by this server for mandatory elements
 * The StructureDefinitions of each resource type is found in the FHIR R4 spec
 * For example, the StructureDefinition for Encounter was found here: https://hl7.org/fhir/R4/encounter.profile.json.html
 * @returns {Object} object whose keys are resourceTypes and values are arrays of strings that are mandatory elements
 */
async function main() {
  const files = fs.readdirSync(STRUCTURE_DEFINITIONS_BASE_PATH).map(f => ({
    shortName: f.split('.profile')[0],
    fullPath: path.join(STRUCTURE_DEFINITIONS_BASE_PATH, f)
  }));

  const mandatoryElementsResults: Record<string, string[]> = {};

  files.forEach(f => {
    const mandatoryElements: string[] = [];

    // read the contents of the file
    const structureDef = JSON.parse(fs.readFileSync(f.fullPath, 'utf8')) as fhir4.StructureDefinition;
    structureDef.snapshot?.element.forEach(e => {
      const elem = e.id?.split('.');
      if (elem && elem.length === 2) {
        if (e.min === 0) {
          mandatoryElements.push(elem[1]);
        }
      }
    });
    if (structureDef.id) {
      mandatoryElementsResults[structureDef.id] = mandatoryElements;
    }
  });

  return mandatoryElementsResults;
}

main()
  .then(mandatoryElementsResults => {
    fs.writeFileSync(
      nonMandatoryElemsOutputPath,
      `
        export const nonMandatoryElements: Record<string, string[]> =
          ${JSON.stringify(mandatoryElementsResults, null, 2)};
        `,
      'utf8'
    );
    console.log(`Wrote file to ${nonMandatoryElemsOutputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
