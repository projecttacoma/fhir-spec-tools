import { ResourceCodeInfo } from '../scripts/types/types';

export const FHIR401CodePaths: Record<string, ResourceCodeInfo> = {
  Account: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ActivityDefinition: {
    primaryCodePath: 'topic',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      product: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  AdverseEvent: {
    primaryCodePath: 'event',
    paths: {
      actuality: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      event: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      seriousness: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      severity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  AllergyIntolerance: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      criticality: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Appointment: {
    primaryCodePath: 'serviceType',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      cancelationReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      serviceCategory: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      appointmentType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  AppointmentResponse: {
    paths: {
      participantType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      participantStatus: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  AuditEvent: {
    paths: {
      type: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: false
      },
      subtype: {
        codeType: 'FHIR.Coding',
        multipleCardinality: true,
        choiceType: false
      },
      action: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      purposeOfEvent: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Basic: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  BiologicallyDerivedProduct: {
    paths: {
      productCategory: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      productCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  BodyStructure: {
    primaryCodePath: 'location',
    paths: {
      morphology: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      location: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      locationQualifier: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CapabilityStatement: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      fhirVersion: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      format: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      patchFormat: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CarePlan: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CareTeam: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CatalogEntry: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      classification: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      additionalCharacteristic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      additionalClassification: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ChargeItem: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      bodysite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      product: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      }
    }
  },
  ChargeItemDefinition: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Claim: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      use: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ClaimResponse: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      use: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      payeeType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      formCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ClinicalImpression: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      prognosisCodeableConcept: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CodeSystem: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      hierarchyMeaning: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      content: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Communication: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      medium: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CommunicationRequest: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      medium: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CompartmentDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Composition: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      confidentiality: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ConceptMap: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Condition: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      severity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Consent: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      scope: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      policyRule: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Contract: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      legalState: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      contentDerivative: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      expirationType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      scope: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Coverage: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  CoverageEligibilityRequest: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      purpose: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CoverageEligibilityResponse: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      purpose: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      form: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DetectedIssue: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      severity: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Device: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceDefinition: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      languageCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceMetric: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      unit: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      operationalStatus: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      color: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DeviceRequest: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceUseStatement: {
    primaryCodePath: 'device.code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DiagnosticReport: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      conclusionCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DocumentManifest: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DocumentReference: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      docStatus: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      securityLabel: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  EffectEvidenceSynthesis: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      synthesisType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      studyType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Encounter: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      class: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Endpoint: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      connectionType: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: false
      },
      payloadType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      payloadMimeType: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  EnrollmentRequest: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  EnrollmentResponse: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  EpisodeOfCare: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  EventDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Evidence: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  EvidenceVariable: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ExampleScenario: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ExplanationOfBenefit: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      use: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserveRequested: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      formCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  FamilyMemberHistory: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      sex: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Flag: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Goal: {
    primaryCodePath: 'category',
    paths: {
      lifecycleStatus: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      achievementStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      description: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      start: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      outcomeCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  GraphDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      start: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Group: {
    primaryCodePath: 'code',
    paths: {
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  GuidanceResponse: {
    primaryCodePath: 'module',
    paths: {
      module: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  HealthcareService: {
    primaryCodePath: 'type',
    paths: {
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceProvisionCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      program: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      characteristic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      communication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      referralMethod: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImagingStudy: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      modality: {
        codeType: 'FHIR.Coding',
        multipleCardinality: true,
        choiceType: false
      },
      procedureCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Immunization: {
    primaryCodePath: 'vaccineCode',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      vaccineCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reportOrigin: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      site: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      route: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      subpotentReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      programEligibility: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      fundingSource: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ImmunizationEvaluation: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      targetDisease: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImmunizationRecommendation: {
    paths: {}
  },
  ImplementationGuide: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      license: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      fhirVersion: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  InsurancePlan: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Invoice: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Library: {
    primaryCodePath: 'topic',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Linkage: {
    paths: {}
  },
  List: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      mode: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      orderedBy: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      emptyReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Location: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      operationalStatus: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: false
      },
      mode: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      physicalType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Measure: {
    primaryCodePath: 'topic',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      scoring: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      compositeScoring: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      improvementNotation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MeasureReport: {
    primaryCodePath: 'measure.topic',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      improvementNotation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Media: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      modality: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      view: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Medication: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      form: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationAdministration: {
    primaryCodePath: 'medication',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationDispense: {
    primaryCodePath: 'medication',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationKnowledge: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      doseForm: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      productType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      intendedRoute: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationRequest: {
    primaryCodePath: 'medication',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      courseOfTherapyType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationStatement: {
    primaryCodePath: 'medication',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicinalProduct: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      domain: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: false
      },
      combinedPharmaceuticalDoseForm: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      legalStatusOfSupply: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      additionalMonitoringIndicator: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      paediatricUseIndicator: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      productClassification: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicinalProductAuthorization: {
    paths: {
      country: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      legalBasis: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductContraindication: {
    paths: {
      disease: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      diseaseStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      comorbidity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicinalProductIndication: {
    paths: {
      diseaseSymptomProcedure: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      diseaseStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      comorbidity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      intendedEffect: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductIngredient: {
    paths: {
      role: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductInteraction: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      effect: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      incidence: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      management: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductManufactured: {
    paths: {
      manufacturedDoseForm: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      unitOfPresentation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      otherCharacteristics: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicinalProductPackaged: {
    paths: {
      legalStatusOfSupply: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductPharmaceutical: {
    paths: {
      administrableDoseForm: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      unitOfPresentation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicinalProductUndesirableEffect: {
    paths: {
      symptomConditionEffect: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      classification: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      frequencyOfOccurrence: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MessageDefinition: {
    primaryCodePath: 'event',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      event: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: true
      },
      category: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      responseRequired: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MessageHeader: {
    paths: {
      event: {
        codeType: 'FHIR.Coding',
        multipleCardinality: false,
        choiceType: true
      },
      reason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MolecularSequence: {
    paths: {
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  NamingSystem: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  NutritionOrder: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      foodPreferenceModifier: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      excludeFoodModifier: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Observation: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ObservationDefinition: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      permittedDataType: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      method: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  OperationDefinition: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      resource: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  OperationOutcome: {
    primaryCodePath: 'issue.code',
    paths: {}
  },
  Organization: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  OrganizationAffiliation: {
    paths: {
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Patient: {
    paths: {
      gender: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      maritalStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  PaymentNotice: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      paymentStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  PaymentReconciliation: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      formCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Person: {
    paths: {
      gender: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  PlanDefinition: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Practitioner: {
    paths: {
      gender: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      communication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  PractitionerRole: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Procedure: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      complication: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      followUp: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      usedCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Provenance: {
    paths: {
      reason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      activity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Questionnaire: {
    primaryCodePath: 'name',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subjectType: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.Coding',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  QuestionnaireResponse: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  RelatedPerson: {
    primaryCodePath: 'relationship',
    paths: {
      relationship: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      gender: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  RequestGroup: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ResearchDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ResearchElementDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      subject: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      variableType: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ResearchStudy: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      primaryPurposeType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      phase: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      focus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      condition: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      keyword: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      location: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonStopped: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ResearchSubject: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  RiskAssessment: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  RiskEvidenceSynthesis: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      synthesisType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      studyType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Schedule: {
    paths: {
      serviceCategory: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  SearchParameter: {
    primaryCodePath: 'target',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      base: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      xpathUsage: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      target: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      comparator: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      },
      modifier: {
        codeType: 'FHIR.code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ServiceRequest: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      orderDetail: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      asNeeded: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      locationCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Slot: {
    paths: {
      serviceCategory: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      appointmentType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Specimen: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      condition: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  SpecimenDefinition: {
    paths: {
      typeCollected: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      patientPreparation: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      collection: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  StructureDefinition: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      keyword: {
        codeType: 'FHIR.Coding',
        multipleCardinality: true,
        choiceType: false
      },
      fhirVersion: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      derivation: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  StructureMap: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Subscription: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Substance: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SubstanceNucleicAcid: {
    paths: {
      sequenceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      oligoNucleotideType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SubstancePolymer: {
    paths: {
      class: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      geometry: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      copolymerConnectivity: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  SubstanceProtein: {
    paths: {
      sequenceType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SubstanceReferenceInformation: {
    paths: {}
  },
  SubstanceSourceMaterial: {
    paths: {
      sourceMaterialClass: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      sourceMaterialType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      sourceMaterialState: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      countryOfOrigin: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      developmentStage: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SubstanceSpecification: {
    paths: {
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      domain: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SupplyDelivery: {
    primaryCodePath: 'type',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  SupplyRequest: {
    primaryCodePath: 'category',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      item: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Task: {
    primaryCodePath: 'code',
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      statusReason: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      businessStatus: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      intent: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      performerType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  TerminologyCapabilities: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      kind: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      codeSearch: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  TestReport: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      result: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  TestScript: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ValueSet: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      jurisdiction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  VerificationResult: {
    paths: {
      need: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      },
      validationType: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      },
      validationProcess: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: true,
        choiceType: false
      },
      failureAction: {
        codeType: 'FHIR.CodeableConcept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  VisionPrescription: {
    paths: {
      status: {
        codeType: 'FHIR.code',
        multipleCardinality: false,
        choiceType: false
      }
    }
  }
};

export const QICore411CodePaths: Record<string, ResourceCodeInfo> = {
  AdverseEvent: {
    primaryCodePath: 'event',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      event: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      seriousness: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      severity: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  AllergyIntolerance: {
    primaryCodePath: 'code',
    paths: {
      reasonRefuted: {
        codeType: 'QICore.reasonRefuted',
        multipleCardinality: false,
        choiceType: false
      },
      clinicalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  BodyStructure: {
    primaryCodePath: 'location',
    paths: {
      morphology: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      location: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationQualifier: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CarePlan: {
    primaryCodePath: 'category',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      AssessPlan: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  CareTeam: {
    primaryCodePath: 'category',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Claim: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Communication: {
    primaryCodePath: 'reasonCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  CommunicationNotDone: {
    primaryCodePath: 'reasonCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      }
    }
  },
  CommunicationRequest: {
    primaryCodePath: 'category',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Condition: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      severity: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Coverage: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Device: {
    primaryCodePath: 'type',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceNotRequested: {
    primaryCodePath: 'code',
    paths: {
      doNotPerformReason: {
        codeType: 'QICore.DoNotPerformReason',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceRequest: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceUseStatement: {
    primaryCodePath: 'device.type',
    paths: {
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DiagnosticReportLab: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      LaboratorySlice: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      conclusionCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DiagnosticReportNote: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      conclusionCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Encounter: {
    primaryCodePath: 'type',
    paths: {
      statusReason: {
        codeType: 'QICore.statusReason',
        multipleCardinality: false,
        choiceType: false
      },
      class: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  FamilyMemberHistory: {
    primaryCodePath: 'relationship',
    paths: {
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      sex: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Flag: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Goal: {
    primaryCodePath: 'category',
    paths: {
      reasonRejected: {
        codeType: 'QICore.reasonRejected',
        multipleCardinality: false,
        choiceType: false
      },
      achievementStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      description: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      outcomeCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImagingStudy: {
    primaryCodePath: 'procedureCode',
    paths: {
      modality: {
        codeType: 'System.Code',
        multipleCardinality: true,
        choiceType: false
      },
      procedureCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Immunization: {
    primaryCodePath: 'vaccineCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      vaccineCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reportOrigin: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      site: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      route: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      subpotentReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      programEligibility: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      fundingSource: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ImmunizationEvaluation: {
    primaryCodePath: 'targetDisease',
    paths: {
      targetDisease: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImmunizationNotDone: {
    primaryCodePath: 'vaccineCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      vaccineCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reportOrigin: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      site: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      route: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      subpotentReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      programEligibility: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      fundingSource: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ImmunizationRecommendation: {
    primaryCodePath: 'recommendation.vaccineCode',
    paths: {}
  },
  Location: {
    primaryCodePath: 'type',
    paths: {
      operationalStatus: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      physicalType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Medication: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      form: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationAdministration: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationAdministrationNotDone: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationDispense: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationDispenseNotDone: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationNotRequested: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      courseOfTherapyType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationRequest: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      courseOfTherapyType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationStatement: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Observation: {
    primaryCodePath: 'code',
    paths: {
      bodyPosition: {
        codeType: 'QICore.bodyPosition',
        multipleCardinality: false,
        choiceType: false
      },
      delta: {
        codeType: 'QICore.delta',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ObservationNotDone: {
    primaryCodePath: 'code',
    paths: {
      notDoneReason: {
        codeType: 'QICore.NotDoneReason',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Organization: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Patient: {
    paths: {
      religion: {
        codeType: 'QICore.religion',
        multipleCardinality: false,
        choiceType: false
      },
      disability: {
        codeType: 'QICore.disability',
        multipleCardinality: true,
        choiceType: false
      },
      maritalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Practitioner: {
    paths: {
      communication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  PractitionerRole: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Procedure: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      complication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      followUp: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      usedCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ProcedureNotDone: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      complication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      followUp: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      usedCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Questionnaire: {
    primaryCodePath: 'name',
    paths: {
      jurisdiction: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  QuestionnaireResponse: {
    paths: {}
  },
  RelatedPerson: {
    primaryCodePath: 'relationship',
    paths: {
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ServiceNotRequested: {
    primaryCodePath: 'code',
    paths: {
      reasonRefused: {
        codeType: 'QICore.DoNotPerformReason',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      orderDetail: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      asNeeded: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ServiceRequest: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'QICore.statusReason',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      orderDetail: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      asNeeded: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Specimen: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      condition: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Substance: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Task: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      businessStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  TaskNotDone: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      businessStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreImplantableDeviceProfile: {
    primaryCodePath: 'type',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  USCoreLaboratoryResultObservationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      Laboratory: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePediatricBMIforAgeObservationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePediatricWeightForHeightObservationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePulseOximetryProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      OxygenSatCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      PulseOx: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreSmokingStatusProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-bmi': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      BMICode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-bodyheight': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      BodyHeightCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-bodytemp': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      BodyTempCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-bodyweight': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      BodyWeightCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-bp': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      BPCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-headcircum': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      HeadCircumCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-heartrate': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      HeartRateCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-oxygensat': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      OxygenSatCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-resprate': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      RespRateCode: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  'observation-vitalspanel': {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      VitalsPanelCode: {
        codeType: 'System.Code',
        multipleCardinality: true,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  }
};

export const QICore600CodePaths: Record<string, ResourceCodeInfo> = {
  AdverseEvent: {
    primaryCodePath: 'event',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      event: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      seriousness: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      severity: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  AllergyIntolerance: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  BodyStructure: {
    primaryCodePath: 'location',
    paths: {
      morphology: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      location: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationQualifier: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CarePlan: {
    primaryCodePath: 'category',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      AssessPlan: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  CareTeam: {
    primaryCodePath: 'category',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Claim: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ClaimResponse: {
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      subType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      payeeType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      fundsReserve: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      formCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Communication: {
    primaryCodePath: 'topic',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CommunicationNotDone: {
    primaryCodePath: 'topic',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      topic: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  CommunicationRequest: {
    primaryCodePath: 'category',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medium: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ConditionEncounterDiagnosis: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      severity: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ConditionProblemsHealthConcerns: {
    primaryCodePath: 'code',
    paths: {
      clinicalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      verificationStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'screening-assessment': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      severity: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Coverage: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Device: {
    primaryCodePath: 'type',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceNotRequested: {
    primaryCodePath: 'code',
    paths: {
      doNotPerformReason: {
        codeType: 'QICore.DoNotPerformReason',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceRequest: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DeviceUseStatement: {
    primaryCodePath: 'device.type',
    paths: {
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  DiagnosticReportLab: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      LaboratorySlice: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      conclusionCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  DiagnosticReportNote: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      conclusionCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Encounter: {
    primaryCodePath: 'type',
    paths: {
      class: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      serviceType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  FamilyMemberHistory: {
    primaryCodePath: 'relationship',
    paths: {
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      sex: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Flag: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Goal: {
    primaryCodePath: 'category',
    paths: {
      achievementStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      priority: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      description: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      start: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      outcomeCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImagingStudy: {
    primaryCodePath: 'procedureCode',
    paths: {
      modality: {
        codeType: 'System.Code',
        multipleCardinality: true,
        choiceType: false
      },
      procedureCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Immunization: {
    primaryCodePath: 'vaccineCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      vaccineCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reportOrigin: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      site: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      route: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      subpotentReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      programEligibility: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      fundingSource: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ImmunizationEvaluation: {
    primaryCodePath: 'targetDisease',
    paths: {
      targetDisease: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      doseStatusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ImmunizationNotDone: {
    primaryCodePath: 'vaccineCode',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      vaccineCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reportOrigin: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      site: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      route: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      subpotentReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      programEligibility: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      fundingSource: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ImmunizationRecommendation: {
    primaryCodePath: 'recommendation.vaccineCode',
    paths: {}
  },
  LaboratoryResultObservation: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Location: {
    primaryCodePath: 'type',
    paths: {
      operationalStatus: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      physicalType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Medication: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      form: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationAdministration: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationAdministrationNotDone: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  MedicationDispense: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationDispenseDeclined: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationNotRequested: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      courseOfTherapyType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationRequest: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      courseOfTherapyType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  MedicationStatement: {
    primaryCodePath: 'medication',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      medication: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  NonPatientObservation: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  NutritionOrder: {
    paths: {
      foodPreferenceModifier: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      excludeFoodModifier: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ObservationCancelled: {
    primaryCodePath: 'code',
    paths: {
      notDoneReason: {
        codeType: 'QICore.NotDoneReason',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ObservationClinicalResult: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  ObservationScreeningAssessment: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      survey: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      'screening-assessment': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Organization: {
    primaryCodePath: 'type',
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Patient: {
    paths: {
      genderIdentity: {
        codeType: 'QICore.USCoreGenderIdentityExtension',
        multipleCardinality: true,
        choiceType: false
      },
      maritalStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Practitioner: {
    paths: {
      communication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  PractitionerRole: {
    primaryCodePath: 'code',
    paths: {
      code: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      specialty: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Procedure: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      complication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      followUp: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      usedCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ProcedureNotDone: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      outcome: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      complication: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      followUp: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      usedCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  Questionnaire: {
    primaryCodePath: 'name',
    paths: {
      jurisdiction: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Code',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  QuestionnaireResponse: {
    paths: {
      completionMode: {
        codeType: 'QICore.completionMode',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  RelatedPerson: {
    primaryCodePath: 'relationship',
    paths: {
      relationship: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ServiceNotRequested: {
    primaryCodePath: 'code',
    paths: {
      reasonRefused: {
        codeType: 'QICore.DoNotPerformReason',
        multipleCardinality: false,
        choiceType: false
      },
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      orderDetail: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      asNeeded: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  ServiceRequest: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      orderDetail: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      asNeeded: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      locationCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  SimpleObservation: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      'us-core': {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Substance: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  Task: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      businessStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  TaskRejected: {
    primaryCodePath: 'code',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      businessStatus: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      performerType: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      reasonCode: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreBMIProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreBloodPressureProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreBodyHeightProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreBodyTemperatureProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreBodyWeightProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreHeadCircumferenceProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreHeartRateProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreImplantableDeviceProfile: {
    primaryCodePath: 'type',
    paths: {
      statusReason: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      safety: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  USCoreObservationOccupationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      socialhistory: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreObservationPregnancyIntentProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      SocialHistory: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreObservationPregnancyStatusProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      SocialHistory: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreObservationSexualOrientationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePediatricBMIforAgeObservationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePediatricHeadOccipitalFrontalCircumferencePercentileProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePediatricWeightForHeightObservationProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCorePulseOximetryProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      PulseOx: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      O2Sat: {
        codeType: 'System.Code',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreRespiratoryRateProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreSmokingStatusProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      SocialHistory: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  },
  USCoreSpecimenProfile: {
    paths: {
      type: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      condition: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      }
    }
  },
  USCoreVitalSignsProfile: {
    primaryCodePath: 'code',
    paths: {
      category: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      VSCat: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      code: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      value: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: true
      },
      dataAbsentReason: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      interpretation: {
        codeType: 'System.Concept',
        multipleCardinality: true,
        choiceType: false
      },
      bodySite: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      },
      method: {
        codeType: 'System.Concept',
        multipleCardinality: false,
        choiceType: false
      }
    }
  }
};
