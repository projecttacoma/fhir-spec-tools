export const qiCorePrimaryCodePaths: Record<string, string> = {
  AdverseEvent: 'event',
  AllergyIntolerance: 'code',
  BodyStructure: 'location',
  CarePlan: 'category',
  CareTeam: 'category',
  Claim: 'type',
  Communication: 'reasonCode',
  CommunicationNotDone: 'reasonCode',
  CommunicationRequest: 'category',
  Condition: 'code',
  Coverage: 'type',
  Device: 'type',
  DeviceNotRequested: 'code',
  DeviceRequest: 'code',
  DeviceUseStatement: 'device.type',
  DiagnosticReportLab: 'code',
  DiagnosticReportNote: 'code',
  Encounter: 'type',
  FamilyMemberHistory: 'relationship',
  Flag: 'code',
  Goal: 'category',
  ImagingStudy: 'procedureCode',
  Immunization: 'vaccineCode',
  ImmunizationEvaluation: 'targetDisease',
  ImmunizationNotDone: 'vaccineCode',
  ImmunizationRecommendation: 'recommendation.vaccineCode',
  Location: 'type',
  Medication: 'code',
  MedicationAdministration: 'medication',
  MedicationAdministrationNotDone: 'medication',
  MedicationDispense: 'medication',
  MedicationDispenseNotDone: 'medication',
  MedicationNotRequested: 'medication',
  MedicationRequest: 'medication',
  MedicationStatement: 'medication',
  Observation: 'code',
  ObservationNotDone: 'code',
  Organization: 'type',
  PractitionerRole: 'code',
  Procedure: 'code',
  ProcedureNotDone: 'code',
  Questionnaire: 'name',
  RelatedPerson: 'relationship',
  ServiceNotRequested: 'code',
  ServiceRequest: 'code',
  Specimen: 'type',
  Substance: 'code',
  Task: 'code',
  TaskNotDone: 'code',
  USCoreImplantableDeviceProfile: 'type',
  USCoreLaboratoryResultObservationProfile: 'code',
  USCorePediatricBMIforAgeObservationProfile: 'code',
  USCorePediatricWeightForHeightObservationProfile: 'code',
  USCorePulseOximetryProfile: 'code',
  USCoreSmokingStatusProfile: 'code',
  'observation-bmi': 'code',
  'observation-bodyheight': 'code',
  'observation-bodytemp': 'code',
  'observation-bodyweight': 'code',
  'observation-bp': 'code',
  'observation-headcircum': 'code',
  'observation-heartrate': 'code',
  'observation-oxygensat': 'code',
  'observation-resprate': 'code',
  'observation-vitalspanel': 'code'
};
