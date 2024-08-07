export const choiceTypes: Record<string, Record<string, string[]>> = {
  Account: {},
  ActivityDefinition: {
    'subject[x]': ['CodeableConcept', 'Reference'],
    'timing[x]': ['Timing', 'dateTime', 'Age', 'Period', 'Range', 'Duration'],
    'product[x]': ['Reference', 'CodeableConcept']
  },
  AdverseEvent: {},
  AllergyIntolerance: {
    'onset[x]': ['dateTime', 'Age', 'Period', 'Range', 'string']
  },
  Appointment: {},
  AppointmentResponse: {},
  AuditEvent: {},
  Basic: {},
  Binary: {},
  BiologicallyDerivedProduct: {},
  BodyStructure: {},
  Bundle: {},
  CapabilityStatement: {},
  CarePlan: {},
  CareTeam: {},
  CatalogEntry: {},
  ChargeItem: {
    'occurrence[x]': ['dateTime', 'Period', 'Timing'],
    'product[x]': ['Reference', 'CodeableConcept']
  },
  ChargeItemDefinition: {},
  Claim: {},
  ClaimResponse: {},
  ClinicalImpression: {
    'effective[x]': ['dateTime', 'Period']
  },
  CodeSystem: {},
  Communication: {},
  CommunicationRequest: {
    'occurrence[x]': ['dateTime', 'Period']
  },
  CompartmentDefinition: {},
  Composition: {},
  ConceptMap: {
    'source[x]': ['uri', 'canonical'],
    'target[x]': ['uri', 'canonical']
  },
  Condition: {
    'onset[x]': ['dateTime', 'Age', 'Period', 'Range', 'string'],
    'abatement[x]': ['dateTime', 'Age', 'Period', 'Range', 'string']
  },
  Consent: {
    'source[x]': ['Attachment', 'Reference']
  },
  Contract: {
    'topic[x]': ['CodeableConcept', 'Reference'],
    'legallyBinding[x]': ['Attachment', 'Reference']
  },
  Coverage: {},
  CoverageEligibilityRequest: {
    'serviced[x]': ['date', 'Period']
  },
  CoverageEligibilityResponse: {
    'serviced[x]': ['date', 'Period']
  },
  DetectedIssue: {
    'identified[x]': ['dateTime', 'Period']
  },
  Device: {},
  DeviceDefinition: {
    'manufacturer[x]': ['string', 'Reference']
  },
  DeviceMetric: {},
  DeviceRequest: {
    'code[x]': ['Reference', 'CodeableConcept'],
    'occurrence[x]': ['dateTime', 'Period', 'Timing']
  },
  DeviceUseStatement: {
    'timing[x]': ['Timing', 'Period', 'dateTime']
  },
  DiagnosticReport: {
    'effective[x]': ['dateTime', 'Period']
  },
  DocumentManifest: {},
  DocumentReference: {},
  EffectEvidenceSynthesis: {},
  Encounter: {},
  Endpoint: {},
  EnrollmentRequest: {},
  EnrollmentResponse: {},
  EpisodeOfCare: {},
  EventDefinition: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  Evidence: {},
  EvidenceVariable: {},
  ExampleScenario: {},
  ExplanationOfBenefit: {},
  FamilyMemberHistory: {
    'born[x]': ['Period', 'date', 'string'],
    'age[x]': ['Age', 'Range', 'string'],
    'deceased[x]': ['boolean', 'Age', 'Range', 'date', 'string']
  },
  Flag: {},
  Goal: {
    'start[x]': ['date', 'CodeableConcept']
  },
  GraphDefinition: {},
  Group: {},
  GuidanceResponse: {
    'module[x]': ['uri', 'canonical', 'CodeableConcept']
  },
  HealthcareService: {},
  ImagingStudy: {},
  Immunization: {
    'occurrence[x]': ['dateTime', 'string']
  },
  ImmunizationEvaluation: {
    'doseNumber[x]': ['positiveInt', 'string'],
    'seriesDoses[x]': ['positiveInt', 'string']
  },
  ImmunizationRecommendation: {},
  ImplementationGuide: {},
  InsurancePlan: {},
  Invoice: {},
  Library: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  Linkage: {},
  List: {},
  Location: {},
  Measure: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  MeasureReport: {},
  Media: {
    'created[x]': ['dateTime', 'Period']
  },
  Medication: {},
  MedicationAdministration: {
    'medication[x]': ['CodeableConcept', 'Reference'],
    'effective[x]': ['dateTime', 'Period']
  },
  MedicationDispense: {
    'statusReason[x]': ['CodeableConcept', 'Reference'],
    'medication[x]': ['CodeableConcept', 'Reference']
  },
  MedicationKnowledge: {},
  MedicationRequest: {
    'reported[x]': ['boolean', 'Reference'],
    'medication[x]': ['CodeableConcept', 'Reference']
  },
  MedicationStatement: {
    'medication[x]': ['CodeableConcept', 'Reference'],
    'effective[x]': ['dateTime', 'Period']
  },
  MedicinalProduct: {},
  MedicinalProductAuthorization: {},
  MedicinalProductContraindication: {},
  MedicinalProductIndication: {},
  MedicinalProductIngredient: {},
  MedicinalProductInteraction: {},
  MedicinalProductManufactured: {},
  MedicinalProductPackaged: {},
  MedicinalProductPharmaceutical: {},
  MedicinalProductUndesirableEffect: {},
  MessageDefinition: {
    'event[x]': ['Coding', 'uri']
  },
  MessageHeader: {
    'event[x]': ['Coding', 'uri']
  },
  MolecularSequence: {},
  NamingSystem: {},
  NutritionOrder: {},
  Observation: {
    'effective[x]': ['dateTime', 'Period', 'Timing', 'instant'],
    'value[x]': [
      'Quantity',
      'CodeableConcept',
      'string',
      'boolean',
      'integer',
      'Range',
      'Ratio',
      'SampledData',
      'time',
      'dateTime',
      'Period'
    ]
  },
  ObservationDefinition: {},
  OperationDefinition: {},
  OperationOutcome: {},
  Organization: {},
  OrganizationAffiliation: {},
  Parameters: {},
  Patient: {
    'deceased[x]': ['boolean', 'dateTime'],
    'multipleBirth[x]': ['boolean', 'integer']
  },
  PaymentNotice: {},
  PaymentReconciliation: {},
  Person: {},
  PlanDefinition: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  Practitioner: {},
  PractitionerRole: {},
  Procedure: {
    'performed[x]': ['dateTime', 'Period', 'string', 'Age', 'Range']
  },
  Provenance: {
    'occurred[x]': ['Period', 'dateTime']
  },
  Questionnaire: {},
  QuestionnaireResponse: {},
  RelatedPerson: {},
  RequestGroup: {},
  ResearchDefinition: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  ResearchElementDefinition: {
    'subject[x]': ['CodeableConcept', 'Reference']
  },
  ResearchStudy: {},
  ResearchSubject: {},
  RiskAssessment: {
    'occurrence[x]': ['dateTime', 'Period']
  },
  RiskEvidenceSynthesis: {},
  Schedule: {},
  SearchParameter: {},
  ServiceRequest: {
    'quantity[x]': ['Quantity', 'Ratio', 'Range'],
    'occurrence[x]': ['dateTime', 'Period', 'Timing'],
    'asNeeded[x]': ['boolean', 'CodeableConcept']
  },
  Slot: {},
  Specimen: {},
  SpecimenDefinition: {},
  StructureDefinition: {},
  StructureMap: {},
  Subscription: {},
  Substance: {},
  SubstancePolymer: {},
  SubstanceProtein: {},
  SubstanceReferenceInformation: {},
  SubstanceSourceMaterial: {},
  SubstanceSpecification: {},
  SupplyDelivery: {
    'occurrence[x]': ['dateTime', 'Period', 'Timing']
  },
  SupplyRequest: {
    'item[x]': ['CodeableConcept', 'Reference'],
    'occurrence[x]': ['dateTime', 'Period', 'Timing']
  },
  Task: {},
  TerminologyCapabilities: {},
  TestReport: {},
  TestScript: {},
  ValueSet: {},
  VerificationResult: {},
  VisionPrescription: {}
};
