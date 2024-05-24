import * as fs from "fs";
import * as path from "path";

const STRUCTURE_DEFINITIONS_BASE_PATH = path.join(
  __dirname,
  "../fhir/resource-definitions"
);
const choiceTypesOutputPath = path.resolve(
  path.join(__dirname, "../data/choice-types.json")
);

/**
 * Parse the StructureDefinition of resource types supported by this server for choice type elements
 * The StructureDefinitions of each resource type is found in the FHIR R4 spec
 *  * For example, the StructureDefinition for Encounter was found here: https://hl7.org/fhir/R4/encounter.profile.json.html
 * @returns {Object} object whose keys are resourceTypes and values are objects whose keys are choice types
 * whose values are an array of all the types it can be
 */
async function main() {
  const files = fs.readdirSync(STRUCTURE_DEFINITIONS_BASE_PATH).map((f) => ({
    shortName: f.split(".profile")[0],
    fullPath: path.join(STRUCTURE_DEFINITIONS_BASE_PATH, f),
  }));

  const choiceTypeElementsResults: Record<
    string,
    Record<string, string[]>
  > = {};

  files.forEach((f) => {
    let choiceTypeElements: Record<string, string[]> = {};

    // read the contents of the file
    const structureDef = JSON.parse(
      fs.readFileSync(f.fullPath, "utf8")
    ) as fhir4.StructureDefinition;
    structureDef.snapshot?.element.forEach((e) => {
      if (e.path.endsWith("[x]") && e.path.split(".").length <= 2) {
        const choiceType = e.id?.split(".")[1];
        let choiceTypeTypes: string[] = [];
        e.type?.forEach((type) => {
          choiceTypeTypes.push(type.code);
        });
        if (choiceType) {
          choiceTypeElements[choiceType] = choiceTypeTypes;
        }
      }
    });
    if (structureDef.id) {
      choiceTypeElementsResults[structureDef.id] = choiceTypeElements;
    }
  });

  return choiceTypeElementsResults;
}

main()
  .then((choiceTypeElementsResults) => {
    fs.writeFileSync(
      choiceTypesOutputPath,
      JSON.stringify(choiceTypeElementsResults, null, 2),
      "utf8"
    );
    console.log(`Wrote file to ${choiceTypesOutputPath}`);
  })
  .catch((e) => {
    console.error(e);
  });
