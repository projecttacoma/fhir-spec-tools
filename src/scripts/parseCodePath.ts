/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';
import { ResourceCodeInfo, CodePathInfo } from './types/types';

const specFolderPath = path.resolve(path.join(__dirname, '../fhir'));
const outputPath = path.resolve(path.join(__dirname, '../data/codePaths.ts'));

interface ElementChoice {
  $: {
    namespace: string;
    name: string;
    'xsi:type': string;
  };
}

/**
 * Parse FHIR Model Info XML and output codePath information
 * for each FHIR Resource type.
 * @param {string} xml the string content of the model info XML to parse
 * @return object whose keys are resourceTypes and values correspond to
 * the resourceTypes' primaryCodePath and code path information
 */
export async function parse(xml: string) {
  const { modelInfo } = await xml2js.parseStringPromise(xml);
  const domainInfo = modelInfo.typeInfo.filter((ti: any) => ti.$.baseType === 'FHIR.DomainResource');
  const elementInfo = modelInfo.typeInfo.filter((ti: any) => ti.$.baseType === 'FHIR.Element' && !ti.$.identifier);
  const elementOneValue = elementInfo.filter((e: any) => e.element.length === 1);

  const results: { [key: string]: ResourceCodeInfo } = {};

  domainInfo.forEach((di: any) => {
    const resourceType = di.$.name;
    const primaryCodePath = di.$.primaryCodePath;
    const paths: Record<string, CodePathInfo> = {};

    // go through every element in the domainInfo
    di.element.forEach((elem: any) => {
      // defaults
      let codeType = '';
      let multipleCardinality = false;
      let choiceType = false;
      if (elem.elementTypeSpecifier) {
        // length of element.elementTypeSpecifier is always 1, so we can index it at 0
        if (elem.elementTypeSpecifier[0].choice) {
          // xsi:type is ChoiceTypeSpecifier, so there are multiple possible types
          const choices: string[] = elem.elementTypeSpecifier[0].choice.map(
            (c: ElementChoice) => `${c.$.namespace}.${c.$.name}`
          );

          // apply heuristic for selecting
          if (choices.includes('FHIR.CodeableConcept')) {
            codeType = 'FHIR.CodeableConcept';
          } else if (choices.includes('FHIR.Coding')) {
            codeType = 'FHIR.Coding';
          } else if (choices.includes('FHIR.code')) {
            codeType = 'FHIR.code';
          }

          // indicate that this is a choice type (all choice types are 0..1 or 1..1 cardinality)
          choiceType = true;
        } else {
          // xsi:type is ListTypeSpecifier
          codeType = elem.elementTypeSpecifier[0].$.elementType;

          // single type of 0..* or 1..* cardinality
          multipleCardinality = true;
        }
      } else {
        // single type of 0..1 or 1..1 cardinality
        codeType = elem.$.elementType;
      }
      // add elements of these three types to the paths of that resource
      if (codeType === 'FHIR.CodeableConcept' || codeType === 'FHIR.Coding' || codeType === 'FHIR.code') {
        paths[elem.$.name] = { codeType, multipleCardinality, choiceType };
      } else if (codeType && codeType !== 'FHIR.string') {
        // if the codeType is not one of those three but also not a FHIR.string it may be within a FHIR.Element
        const codeTypeName = codeType.split('R.');
        const name = elementOneValue.filter((e: any) => e.$.name === codeTypeName[1]);
        if (name.length === 1) {
          if (name[0].element[0].$.elementType === 'System.String') {
            codeType = 'FHIR.code';
            paths[elem.$.name] = {
              codeType,
              multipleCardinality,
              choiceType
            };
          }
        }
      }
    });
    results[resourceType] = {
      primaryCodePath: primaryCodePath,
      paths: paths
    };
  });
  return results;
}

/**
 * Parse QICore Model Info XML and output codePath information
 * for each Domain Resource type.
 * @param {string} xml the string content of the model info XML to parse
 * @return object whose keys are resourceTypes and values correspond to
 * the resourceTypes' primaryCodePath and code path information
 */
export async function parseQICore(xml: string) {
  const { modelInfo } = await xml2js.parseStringPromise(xml);
  const domainInfo = modelInfo.typeInfo.filter((ti: any) => ti.$.baseType === 'QICore.DomainResource');

  // QICore types where the base is System.Concept (no System.Code bases exist)
  const baseConcepts: string[] = modelInfo.typeInfo
    .filter((ti: any) => ti.$.baseType === 'System.Concept')
    .map((ti: any) => `${ti.$.namespace}.${ti.$.name}`);

  const results: { [key: string]: ResourceCodeInfo } = {};

  domainInfo.forEach((di: any) => {
    const resourceType = di.$.name;
    const primaryCodePath = di.$.primaryCodePath;
    const paths: Record<string, CodePathInfo> = {};

    // go through every element in the domainInfo
    di.element.forEach((elem: any) => {
      // defaults
      let codeType = '';
      let multipleCardinality = false;
      let choiceType = false;

      if (elem.elementTypeSpecifier) {
        // length of element.elementTypeSpecifier is always 1, so we can index it at 0
        if (elem.elementTypeSpecifier[0].choice) {
          // xsi:type is ChoiceTypeSpecifier, so there are multiple possible types
          const choices: string[] = elem.elementTypeSpecifier[0].choice.map(
            (c: ElementChoice) => `${c.$.namespace}.${c.$.name}`
          );

          // select System.Concept over System.Code
          if (choices.includes('System.Concept')) {
            codeType = 'System.Concept';
          } else if (choices.includes('System.Code')) {
            codeType = 'System.Code';
          }

          // indicate that this is a choice type (all choice types are 0..1 or 1..1 cardinality)
          choiceType = true;
        } else {
          // xsi:type is ListTypeSpecifier
          codeType = elem.elementTypeSpecifier[0].$.elementType;

          // single type of 0..* or 1..* cardinality
          multipleCardinality = true;
        }
      } else {
        // single type of 0..1 or 1..1 cardinality
        codeType = elem.$.elementType;
      }

      // add elements of these types to the paths
      if (codeType === 'System.Concept' || codeType === 'System.Code' || baseConcepts.includes(codeType)) {
        // Note: this keeps the QICore specified type rather than simplifying to the base System.Concept
        paths[elem.$.name] = { codeType, multipleCardinality, choiceType };
      }
    });

    results[resourceType] = {
      primaryCodePath: primaryCodePath,
      paths: paths
    };
  });
  return results;
}

/**
 * Scan src/fhir for FHIR and QICore modelinfo files and generate a TS file with exported objects for each
 * FHIR and QICore model, where the object is a map of resourceType => ResourceCodeInfo. Assumes modelinfo
 * file names with format: [qicore|fhir}-modelinfo-X.Y.Z.xml, where X, Y, and Z are major, minor, and patch
 * components of version. Exported objects have corresponding name: [QICore|FHIR]XYZCodePaths.
 * Example: qicore-modelinfo-4.1.1.xml results in exported variable QICore411CodePaths.
 */
async function main() {
  const exports: string[] = [`import { ResourceCodeInfo } from '../scripts/types/types';`];
  for (const file of fs.readdirSync(specFolderPath)) {
    const match = file.match(/^(qicore|fhir)-modelinfo-(\d+)\.(\d+)\.(\d+)\.xml$/);
    if (match) {
      const isQICore = file.startsWith('qicore');
      const name = `${isQICore ? 'QICore' : 'FHIR'}${match[2]}${match[3]}${match[4]}CodePaths`;
      const xml = fs.readFileSync(path.resolve(specFolderPath, file), 'utf8');
      const data = isQICore ? await parseQICore(xml) : await parse(xml);
      exports.push(`export const ${name}: Record<string, ResourceCodeInfo> = ${JSON.stringify(data, null, 2)};`);
    }
  }

  fs.writeFileSync(outputPath, exports.join('\n\n'), 'utf8');
  console.log(`Wrote file to ${outputPath}`);
}

main();
