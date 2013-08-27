function showTimeline(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/allergy.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '../templates/problem.ejs'}).update('problems', {problems: problems});
    new EJS({url: '../templates/procedure.ejs'}).update('procedures', {procedures: procedures});
    new EJS({url: '../templates/immunization.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '../templates/medication.ejs'}).update('medications', {medications: medications});
    new EJS({url: '../templates/lab.ejs'}).update('labs', {labs: labs});
    new EJS({url: '../templates/encounter.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '../templates/vital.ejs'}).update('vitals', {vitals: vitals});
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