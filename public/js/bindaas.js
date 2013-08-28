var demographics = {
  "_id": {
    "$oid": "521c55ea3004e6fefc38ae9f"
  },
  "name": {
    "prefix": "Mr.",
    "given": [
      "Adam",
      "Frankie"
    ],
    "family": "Everyman"
  },
  "dob": "1954-11-24T16:00:00.000Z",
  "gender": "Male",
  "marital_status": "Married",
  "address": {
    "street": [
      "17 Daws Rd."
    ],
    "city": "Blue Bell",
    "state": "MA",
    "zip": "02368",
    "country": "US"
  },
  "phone": {
    "home": "tel:(781)555-1212",
    "work": null,
    "mobile": null
  },
  "email": null,
  "language": "fr-CN",
  "race": "White",
  "ethnicity": "Not Hispanic or Latino",
  "religion": "Christian (non-Catholic, non-specific)",
  "birthplace": {
    "state": "MA",
    "zip": "02368",
    "country": "USA"
  },
  "guardian": {
    "name": {
      "given": [
        "Ralph"
      ],
      "family": "Relative"
    },
    "relationship": "Grandfather",
    "address": {
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "phone": {
      "home": "tel:(781)555-1212"
    }
  },
  "provider": {
    "organization": "Good Health Clinic",
    "phone": "tel:(781)555-1212",
    "address": {
      "street": [
        "21 North Ave"
      ],
      "city": "Burlington",
      "state": "MA",
      "zip": "02368",
      "country": "USA"
    }
  },
  "uid": 0
};
var allergies=[
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9c"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ASPIRIN",
      "code": "R16CO5Y76E",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9d"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Nausea",
      "code": "73879007",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "Codeine",
      "code": "Q830PW7520",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38ae9e"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Hives",
      "code": "247472004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system": "2.16.840.1.113883.6.88",
      "code_system_name": "RxNorm"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aead"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Nausea",
      "code": "73879007",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "Codeine",
      "code": "Q830PW7520",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aeae"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Hives",
      "code": "247472004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system": "2.16.840.1.113883.6.88",
      "code_system_name": "RxNorm"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aeb1"
    },
    "date_range": {
      "start": "2009-09-01T16:00:00.000Z",
      "end": "2010-01-02T16:00:00.000Z"
    },
    "name": "drug allergy",
    "code": "416098002",
    "code_system": "2.16.840.1.113883.6.96",
    "code_system_name": "SNOMED CT",
    "severity": "Moderate to severe",
    "reaction": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reaction_type": {
      "name": "Adverse reaction to substance",
      "code": "282100009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "allergen": {
      "name": "ASPIRIN",
      "code": "R16CO5Y76E",
      "code_system": "2.16.840.1.113883.4.9",
      "code_system_name": "UNII"
    },
    "uid": 0
  }
];
var encounters=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aeac"
    },
    "date": "2000-04-06T16:00:00.000Z",
    "name": "Office consultation - 15 minutes",
    "code": "99241",
    "code_system": "2.16.840.1.113883.6.12",
    "code_system_name": "CPT",
    "code_system_version": "4",
    "finding": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "translation": {
      "name": "Ambulatory",
      "code": "AMB",
      "code_system": "2.16.840.1.113883.5.4",
      "code_system_name": "HL7 ActEncounterCode"
    },
    "performer": {
      "name": "General Physician",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "location": {
      "organization": "General Acute Care Hospital",
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aebd"
    },
    "date": "2000-04-06T16:00:00.000Z",
    "name": "Office consultation - 15 minutes",
    "code": "99241",
    "code_system": "2.16.840.1.113883.6.12",
    "code_system_name": "CPT",
    "code_system_version": "4",
    "finding": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "translation": {
      "name": "Ambulatory",
      "code": "AMB",
      "code_system": "2.16.840.1.113883.5.4",
      "code_system_name": "HL7 ActEncounterCode"
    },
    "performer": {
      "name": "General Physician",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": "SNOMED CT"
    },
    "location": {
      "organization": "General Acute Care Hospital",
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US"
    },
    "uid": 0
  }
];
var immunizations=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea2"
    },
    "date": "1999-10-30T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea3"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea4"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Pneumococcal polysaccharide vaccine",
      "code": "33",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Pneumococcal NOS",
        "code": "109",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea5"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Tetanus and diphtheria toxoids - preservative free",
      "code": "103",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Tetanus and diphtheria toxoids - preservative free",
        "code": "09",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb4"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Pneumococcal polysaccharide vaccine",
      "code": "33",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Pneumococcal NOS",
        "code": "109",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb6"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Tetanus and diphtheria toxoids - preservative free",
      "code": "103",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "Tetanus and diphtheria toxoids - preservative free",
        "code": "09",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb3"
    },
    "date": "1999-10-30T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb5"
    },
    "date": "1998-12-14T16:00:00.000Z",
    "product": {
      "name": "Influenza virus vaccine",
      "code": "88",
      "code_system": "2.16.840.1.113883.6.59",
      "code_system_name": "CVX",
      "translation": {
        "name": "influenza, live, intranasal",
        "code": "111",
        "code_system": "2.16.840.1.113883.6.59",
        "code_system_name": "CVX"
      }
    },
    "route": {
      "name": "Intramuscular injection",
      "code": "IM",
      "code_system": "2.16.840.1.113883.5.112",
      "code_system_name": "RouteOfAdministration"
    },
    "instructions": "Possible flu-like symptoms for three days.",
    "education_type": {
      "name": "immunization education",
      "code": "171044003",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  }
];
var medications=[
  {
    "_id": {
      "$oid": "521c55ea3004e6fefc38aea0"
    },
    "date_range": {
      "start": "2011-02-28T16:00:00.000Z",
      "end": "2012-02-29T16:00:00.000Z"
    },
    "product": {
      "name": "Albuterol 0.09 MG/ACTUAT inhalant solution",
      "code": "329498",
      "code_system": "2.16.840.1.113883.6.88",
      "translation": {
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system": "2.16.840.1.113883.6.88",
        "code_system_name": "RxNorm"
      }
    },
    "dose_quantity": {
      "value": "1",
      "unit": null
    },
    "rate_quantity": {
      "value": "90",
      "unit": "ml/min"
    },
    "precondition": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reason": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "vehicle": {
      "name": "drug vehicle",
      "code": "412307009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": null
    },
    "administration": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "prescriber": {
      "organization": "Good Health Clinic",
      "person": null
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c585f3004e6fefc38aeb0"
    },
    "date_range": {
      "start": "2011-02-28T16:00:00.000Z",
      "end": "2012-02-29T16:00:00.000Z"
    },
    "product": {
      "name": "Albuterol 0.09 MG/ACTUAT inhalant solution",
      "code": "329498",
      "code_system": "2.16.840.1.113883.6.88",
      "translation": {
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system": "2.16.840.1.113883.6.88",
        "code_system_name": "RxNorm"
      }
    },
    "dose_quantity": {
      "value": "1",
      "unit": null
    },
    "rate_quantity": {
      "value": "90",
      "unit": "ml/min"
    },
    "precondition": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "reason": {
      "name": "Bronchitis",
      "code": "32398004",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "vehicle": {
      "name": "drug vehicle",
      "code": "412307009",
      "code_system": "2.16.840.1.113883.6.96",
      "code_system_name": null
    },
    "administration": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system": "2.16.840.1.113883.3.26.1.1",
      "code_system_name": "NCI Thesaurus"
    },
    "prescriber": {
      "organization": "Good Health Clinic",
      "person": null
    },
    "uid": 0
  }
];
var problems=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea9"
    },
    "date_range": {
      "start": "1998-02-27T16:00:00.000Z",
      "end": "2011-01-02T16:00:00.000Z"
    },
    "name": "Complaint",
    "status": "Active",
    "age": 57,
    "code": "409586006",
    "code_system": "2.16.840.1.113883.6.96",
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeba"
    },
    "date_range": {
      "start": "1998-02-27T16:00:00.000Z",
      "end": "2011-01-02T16:00:00.000Z"
    },
    "name": "Complaint",
    "status": "Active",
    "age": 57,
    "code": "409586006",
    "code_system": "2.16.840.1.113883.6.96",
    "uid": 0
  }
];
var procedures=[
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea7"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea6"
    },
    "date": "2011-02-14T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "Colonoscope",
      "code": "90412006",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c55eb3004e6fefc38aea8"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb7"
    },
    "date": "2011-02-14T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "Colonoscope",
      "code": "90412006",
      "code_system": "2.16.840.1.113883.6.96"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb8"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  },
  {
    "_id": {
      "$oid": "521c58603004e6fefc38aeb9"
    },
    "date": "2011-02-02T16:00:00.000Z",
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system": "2.16.840.1.113883.6.96",
    "specimen": {
      "name": null,
      "code": null,
      "code_system": null
    },
    "performer": {
      "organization": null,
      "street": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "phone": null
    },
    "device": {
      "name": "General Acute Care Hospital",
      "code": "GACH",
      "code_system": "2.16.840.1.113883.5.111"
    },
    "uid": 0
  }
];
var timeline=[
{
 "year": 2012,
 "data":[
 {
  "title":"Chest X Ray",
  "date":"May 14 2012",
  "type":"plan"
},
{
  "title":"Chest X Ray",
  "date":"May 14 2012",
  "type":"plan"
},{
  "title":"Ankel Sprain",
  "date":"May 10 2012",
  "type":"problem"
},{
  "title":"ER Visit for Ankle Sprain",
  "date":"May 6 2012",
  "type":"encounter"
}]
},
{
 "year": 2007,
 "data":[
{
  "title":"Acetaminophen with codeine",
  "date":"May 14 2007",
  "type":"medication"
},{
  "title":"Whole Blood Hemogram V",
  "date":"May 10 2007",
  "type":"lab"
},{
  "title":"Indomethacin",
  "date":"May 6 2007",
  "type":"medication"
}]
},
{
 "year": 2006,
 "data":[
{
  "title":"Laparoscopic Chlecystectomy",
  "date":"May 14 2006",
  "type":"immunization"
},
 {
  "title":"Gall Bladder Surgery",
  "date":"May 10 2007",
  "type":"encounter"
},{
  "title":"Cholecystitis",
  "date":"May 6 2007",
  "type":"problem"
}]
},{
 "year": 2005,
 "data":[
{
  "title":"Tetanus and diphtheria toxoid,IM",
  "date":"May 6 2005",
  "type":"immunization"
},
{
  "title":"Cesarian Section",
  "date":"May 14 2005",
  "type":"procedure"
}]
},{
 "year": 2004,
 "data":[
 {
  "title":"Tetanus and diphtheria toxoid,IM",
  "date":"May 6 2007",
  "type":"immunization"
}]
}
];
function showDetail(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/immunizations.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '../templates/encounters.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '../templates/medications.ejs'}).update('medications', {medications: medications});
    new EJS({url: '../templates/problems.ejs'}).update('problems', {problems: problems});
    new EJS({url: '../templates/procedures.ejs'}).update('procedures', {procedures: procedures});
}

function showDetailAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/problem.json',function(problems){
        new EJS({url: '../templates/problems.ejs'}).update('problems', {problems: problems});
    });
    getCCDA('/timeline/procedure.json',function(procedures){
        new EJS({url: '../templates/procedures.ejs'}).update('procedures', {procedures: procedures});
    });
    getCCDA('/timeline/immunization.json',function(immunizations){
        new EJS({url: '../templates/immunizations.ejs'}).update('immunizations', {immunizations: immunizations});
    });
    getCCDA('/timeline/medication.json',function(medications){
        new EJS({url: '../templates/medications.ejs'}).update('medications', {medications: medications});
    });
    getCCDA('/timeline/encounter.json',function(encounters){
        new EJS({url: '../templates/encounters.ejs'}).update('encounters', {encounters: encounters});
    });
}
function showTimelineAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/allergy.json',function(allergies){
        new EJS({url: '../templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    });
    getCCDA('/timeline/timeline.json',function(allergies){
        new EJS({url: '../templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    });
}
function showLabsAjax(){
    getCCDA('/timeline/lab.json',function(labs){
       new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
      // new EJS({url: '../templates/labs.ejs'}).update('labs', {labs: labs});
    });
}
function getCCDA(url,callback){
     $.ajax({
        url: url,
        contentType: "application/json",
    }).done(function(data) {
      callback(data);
    });
}
function showTimeline(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '../templates/timeline.ejs'}).update('timeline', {timeline: timeline});
}
function showLabs(){
  new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
}
function formatDate(jsonDate)
{
  if(jsonDate == null){
    return 'Now';
  }else{
  var date = new Date(parseInt(jsonDate.substr(6)));
  return date.toGMTString().substr(5,11);
  }
}
function showMore(url){
  window.open(url);
}