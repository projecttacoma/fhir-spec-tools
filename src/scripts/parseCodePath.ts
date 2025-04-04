/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';
import { ResourceCodeInfo, CodePathInfo } from './types/types';

const modelInfoPath = path.resolve(path.join(__dirname, '../fhir/fhir-modelinfo-4.0.1.xml'));
const outputPath = path.resolve(path.join(__dirname, '../data/codePaths.ts'));
const xmlStr = fs.readFileSync(modelInfoPath, 'utf8');

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
 * the resourceTypes' primaryCodePath
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

    let codeType: string;
    let multipleCardinality: boolean;
    let choiceType: boolean;

    // go through every element in the domainInfo
    di.element.forEach((elem: any) => {
      if (elem.elementTypeSpecifier) {
        // length of element.elementTypeSpecifier is always 1, so we can index it at 0
        if (elem.elementTypeSpecifier[0].choice) {
          // xsi:type is ChoiceTypeSpecifier, so there are multiple possible types
          // save both options to an array
          const choices: string[] = [];
          elem.elementTypeSpecifier[0].choice.forEach((c: ElementChoice) => {
            const choiceNamespace = c.$.namespace;
            const choiceName = c.$.name;
            choices.push(`${choiceNamespace}.${choiceName}`);
          });

          // apply heuristic for selecting
          if (choices.includes('FHIR.CodeableConcept')) {
            codeType = 'FHIR.CodeableConcept';
          } else if (choices.includes('FHIR.Coding')) {
            codeType = 'FHIR.Coding';
          } else if (choices.includes('FHIR.code')) {
            codeType = 'FHIR.code';
          }

          // all choice types are 0..1 or 1..1 cardinality
          multipleCardinality = false;

          // indicate that this is a choice type
          choiceType = true;
        } else {
          // xsi:type is ListTypeSpecifier
          codeType = elem.elementTypeSpecifier[0].$.elementType;

          // single type of 0..* or 1..* cardinality
          multipleCardinality = true;

          // indicate that this is not a choice type
          choiceType = false;
        }
      } else {
        // single type of 0..1 or 1..1 cardinality
        codeType = elem.$.elementType;
        multipleCardinality = false;

        // indicate that this is not a choice type
        choiceType = false;
      }
      // add elements of these three types to the paths of that resource
      if (codeType === 'FHIR.CodeableConcept' || codeType === 'FHIR.Coding' || codeType === 'FHIR.code') {
        paths[elem.$.name] = { codeType, multipleCardinality, choiceType };
        codeType = '';
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
            codeType = '';
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

parse(xmlStr)
  .then(data => {
    fs.writeFileSync(
      outputPath,
      `
        import { ResourceCodeInfo } from '../scripts/types/types';

        export const parsedCodePaths: Record<string, ResourceCodeInfo> =
          ${JSON.stringify(data, null, 2)};
        `,
      'utf8'
    );
    console.log(`Wrote file to ${outputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
