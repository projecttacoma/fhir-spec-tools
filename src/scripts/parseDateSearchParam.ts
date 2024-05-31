import * as fs from 'fs';
import * as path from 'path';

const searchParameterPath = path.resolve(path.join(__dirname, '../fhir/search-parameters.json'));
const outputPath = path.resolve(path.join(__dirname, '../data/dateSearchParameters.ts'));

const jsonStr = fs.readFileSync(searchParameterPath, 'utf8');

/**
 * Parse search parameters to just date parameters
 * @param {string} compartmentJson the string content of the full set of search parameters
 * @return {Object} search parameter bundle where the entries are limited to type date
 */
async function parse(searchParams: string) {
  const searchParamsBundle = (await JSON.parse(searchParams)) as fhir4.Bundle;
  const limitedEntry = searchParamsBundle.entry?.filter(
    e => e.resource?.resourceType === 'SearchParameter' && e.resource.type === 'date'
  );
  searchParamsBundle.entry = limitedEntry;
  return searchParamsBundle;
}

parse(jsonStr)
  .then(data => {
    fs.writeFileSync(
      outputPath,
      `  
  // Taken from https://hl7.org/fhir/R4/search-parameters.json
  // Includes only date type search parameters
  export const SearchParameters: fhir4.Bundle =
    ${JSON.stringify(data, null, 2)};
            `,
      'utf8'
    );
    console.log(`Wrote file to ${outputPath}`);
  })
  .catch(e => {
    console.error(e);
  });
