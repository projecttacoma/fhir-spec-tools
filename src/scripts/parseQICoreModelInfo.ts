/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';

const modelInfoPath = path.resolve(path.join(__dirname, '../fhir/qicore-modelinfo-4.1.1.xml'));
const outputPath = path.resolve(path.join(__dirname, '../data/primary-code-paths.ts'));
const xmlStr = fs.readFileSync(modelInfoPath, 'utf8');

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

parse(xmlStr)
  .then(data => {
    fs.writeFileSync(
      outputPath,
      `
        export const qiCore411PrimaryCodePaths: Record<string, string> =
          ${JSON.stringify(data, null, 2)};
        `,
      'utf8'
    );
    console.log(`Wrote file to ${outputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
