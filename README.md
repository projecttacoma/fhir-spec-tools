# fhir-spec-tools
Scripts and other shared tooling for working with the HL7® FHIR® standard


# List of scripts
* parseChoiceTypesForResource.ts
    * Run with `npm run build:choice-types`
    *	**Purpose**: Option `[x]` choice types for each resource
    * **Format**: creates an object whose keys are resourceTypes and values are objects whose keys are choice types and values are an array of all the types it can be
    *	**Input**: structure definitions in folder resource-definitions (pulled from each resource profile, example:  https://hl7.org/fhir/R4/encounter.profile.json)
    *	**Output**: choice-types.json
    * **Original repo**: bulk-export-server getChoiceTypesForResource.js
* parseMandatoryElements.ts
    * Run with `npm run build:mandatory-elements`
    *	**Purpose**: Mandatory (minimum cardinality 1) elements for each resource
    * **Format**: creates object whose keys are resourceTypes and values are arrays of strings that are mandatory elements
    *	**Input**: structure definitions in folder resource-definitions (pulled from each resource profile, example:  https://hl7.org/fhir/R4/encounter.profile.json)
    *	**Output**: mandatory-elements.json
    * **Original repo**: bulk-export-server parseStructureDefinitions.js
* parseCompartmentDefinition.ts
    * Run with `npm run build:patient-paths`
    *	**Purpose**: patient reference paths and patient search parameters for each associated resource
    * **Format**: creates object whose keys are resourceTypes and values are arrays of strings to use to reference a patient (or same but for search parameters)
    *	**Input**: compartmentdefinition-patient.json from https://hl7.org/fhir/R4/compartmentdefinition-patient.html
    *	**Output**: patient-attribute-paths.json, patient-search-parameters.json 
    * **Original repo**: deqm-test-server parseCompartmentDefinition.js
    * **Note**: patient-search-parameters is not used by deqm-test-server but is used in fqm-execution. bulk-export-server also uses the compartmentDefinition, but only uses the resource names, which can be pulled from either of these output files instead. This script is currently dependent on node-fhir-server-code for patient-attribute-paths, but ideally these would be pulled directly from the fhir spec.
* parseCodeSystems.ts
    * Run with `npm run build:code-systems`
    *	**Purpose**: Lookup name for each code system url
    * **Format**: object with code system url keys mapped to name values
    *	**Input**: cts-metadata.json
    *	**Output**: systemMap.ts
    * **Original repo**: fqm-execution parseCodeSystems.ts
* parseCodePath.ts
    * Run with `npm run build:codes`
    *	**Purpose**: primary and other code paths for each resource
    * **Format**: create object whose keys are resourceTypes and values have the resourceTypes' primaryCodePath and other code-type paths
    *	**Input**: fhir-modelinfo-4.0.1.xml
    *	**Output**: codePaths.ts
    * **Original repo**: fqm-testify parseCodePath.ts
* parsePrimaryDatePath.ts
    * Run with `npm run build:dates`
    *	**Purpose**: information about date paths and date types for each resource
    * **Format**: create object whose keys are resourceTypes and values are an object with a date path key and object listing that key’s data types
    *	**Input**: fhir-modelinfo-4.0.1.xml
    *	**Output**: primaryDatePaths.ts
    * **Original repo**: fqm-testify parsePrimaryDatePath.ts
* parseDateSearchParam.ts
    * Run with `npm run build:date-search-parameters`
    *	**Purpose**: filter all search parameters to only date parameters
    * **Format**: fhir searchParams bundle
    *	**Input**: search-parameters.json from https://hl7.org/fhir/R4/search-parameters.json
    *	**Output**: dateSearchParameters.ts
    * **Original repo**: fqm-execution (just files, script was not previously committed)
* parseProperties.ts
    * Run with `npm run build:properties`
    *	**Purpose**: valid properties exist for each resource
    * **Format**: create object whose keys are resourceTypes and values are an array of valid properties
    *	**Input**: fhir-modelinfo-4.0.1.xml
    *	**Output**: propertyPaths.ts
    * **Original repo**: fqm-testify parseProperties.ts, parse-properties branch
