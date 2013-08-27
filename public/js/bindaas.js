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
function showDetail(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/detail/allergy.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '../templates/detail/problem.ejs'}).update('problems', {problems: problems});
    new EJS({url: '../templates/detail/procedure.ejs'}).update('procedures', {procedures: procedures});
    new EJS({url: '../templates/detail/immunization.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '../templates/detail/medication.ejs'}).update('medications', {medications: medications});
    new EJS({url: '../templates/detail/lab.ejs'}).update('labs', {labs: labs});
    new EJS({url: '../templates/detail/encounter.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '../templates/detail/vital.ejs'}).update('vitals', {vitals: vitals});
}
function showTimeline(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/timeline/allergy.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '../templates/timeline/problem.ejs'}).update('problems', {problems: problems});
    new EJS({url: '../templates/timeline/procedure.ejs'}).update('procedures', {procedures: procedures});
    new EJS({url: '../templates/timeline/immunization.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '../templates/timeline/medication.ejs'}).update('medications', {medications: medications});
    new EJS({url: '../templates/timeline/lab.ejs'}).update('labs', {labs: labs});
    new EJS({url: '../templates/timeline/encounter.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '../templates/timeline/vital.ejs'}).update('vitals', {vitals: vitals});
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