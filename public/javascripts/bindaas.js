var api_key= "5d36e104-bdfe-4ec1-975c-728154aa90f9";
function showTimeline(){
    getCCDA('/demographics.json',function(demographics){
      new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/allergy.json',function(allergies){
        new EJS({url: '../templates/allergy.ejs'}).update('allergies', {allergies: allergies});
    });
    getCCDA('/problem.json',function(problems){
        new EJS({url: '../templates/problem.ejs'}).update('problems', {problems: problems});
    });
    getCCDA('/procedure.json',function(procedures){
        new EJS({url: '../templates/procedure.ejs'}).update('procedures', {procedures: procedures});
    });
    getCCDA('/immunization.json',function(immunizations){
        new EJS({url: '../templates/immunization.ejs'}).update('immunizations', {immunizations: immunizations});
    });
    getCCDA('/medication.json',function(medications){
        new EJS({url: '../templates/medication.ejs'}).update('medications', {medications: medications});
    });
    getCCDA('/lab.json',function(labs){
        new EJS({url: '../templates/lab.ejs'}).update('labs', {labs: labs});
    });
    getCCDA('/encounter.json',function(encounters){
        new EJS({url: '../templates/encounter.ejs'}).update('encounters', {encounters: encounters});
    });
    getCCDA('/vital.json',function(vitals){
        new EJS({url: '../templates/vital.ejs'}).update('vitals', {vitals: vitals});
    });
}

//This can be done on the backend as well
function getCCDA(url,callback){
     $.ajax({
        url: url,
        contentType: "application/json",
    }).done(function(data) {
      callback(data);
    });
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