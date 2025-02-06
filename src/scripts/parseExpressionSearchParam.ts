import { SearchParameter } from 'fhir/r4';
import * as fs from 'fs';
import * as path from 'path';

const searchParameterPath = path.resolve(path.join(__dirname, '../fhir/search-parameters.json'));
const outputPath = path.resolve(path.join(__dirname, '../data/expressionSearchParameters.ts'));

const jsonStr = fs.readFileSync(searchParameterPath, 'utf8');

/**
 * Parse search parameters to just date parameters
 * @param {string} compartmentJson the string content of the full set of search parameters
 * @return {Object} mapping expression to its search parameter code
 */
async function parse(searchParams: string): Promise<Record<string, string | undefined>> {
  const expMap: Record<string, string | undefined> = {};
  const searchParamsBundle = (await JSON.parse(searchParams)) as fhir4.Bundle<SearchParameter>;
  searchParamsBundle.entry?.forEach(e => {
    const resource = e.resource as SearchParameter;
    const expressions = resource.expression?.split(' | ');
    expressions?.forEach(exp => {
      expMap[exp] = resource.code;
    });
  });
  return expMap;
}

parse(jsonStr)
  .then(data => {
    fs.writeFileSync(
      outputPath,
      `  
  // Taken from https://hl7.org/fhir/R4/search-parameters.json
  // Maps expressions to their search parameter code
  export const ExpressionSearchMap: Record<string, string | undefined> =
    ${JSON.stringify(data, null, 2)};
            `,
      'utf8'
    );
    console.log(`Wrote file to ${outputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
