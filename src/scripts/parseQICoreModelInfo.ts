/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';

const specFolderPath = path.resolve(path.join(__dirname, '../fhir'));
const outputPath = path.resolve(path.join(__dirname, '../data/primary-code-paths.ts'));

/**
 * Parse QICore model info XML and output a map of resourceType => primary code path
 * @param {string} xml the string content of the model info XML to parse
 * @return {Object} object whose keys are resourceTypes and value is the primary code path of the resourceType
 */
async function parse(xml: string) {
  const { modelInfo } = await xml2js.parseStringPromise(xml);
  const domainInfo = modelInfo.typeInfo.filter((ti: any) => ti.$.baseType === 'QICore.DomainResource');

  const res: { [key: string]: string } = {};

  domainInfo.forEach((di: any) => {
    const resourceType = di.$.name;

    res[resourceType] = di.$.primaryCodePath;
  });

  return res;
}

/**
 * Scan src/fhir for QICore modelinfo files and generate a TS file with exported objects for each
 * QICore model, where the object is a map of resourceType => primary code path . Assumes modelinfo
 * file names with format: qicore-modelinfo-X.Y.Z.xml, where X, Y, and Z are major, minor, and patch
 * components of version. Exported objects have corresponding name: QICoreXYZPrimaryCodePaths.
 * Example: qicore-modelinfo-4.1.1.xml results in exported variable QICore411PrimaryCodePaths.
 */
async function main() {
  const exports: string[] = [];
  for (const file of fs.readdirSync(specFolderPath)) {
    const match = file.match(/^qicore-modelinfo-(\d+)\.(\d+)\.(\d+)\.xml$/);
    if (match) {
      const name = `QICore${match[1]}${match[2]}${match[3]}PrimaryCodePaths`;
      const xml = fs.readFileSync(path.resolve(specFolderPath, file), 'utf8');
      const data = await parse(xml);
      exports.push(`export const ${name}: Record<string, string> = ${JSON.stringify(data, null, 2)};`);
    }
  }

  fs.writeFileSync(outputPath, exports.join('\n\n'), 'utf8');
  console.log(`Wrote file to ${outputPath}`);
}

main();
