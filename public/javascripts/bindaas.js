var api_key= "5d36e104-bdfe-4ec1-975c-728154aa90f9";
function showTimeline(){
    getCCDA('/demographics.json',function(demographics){
      console.log(demographics);
    });
    getCCDA('/allergy.json',function(allergies){
      console.log(allergies);
    });
    getCCDA('/problem.json',function(problems){
      console.log(problems);
    });
    getCCDA('/procedure.json',function(procedures){
      console.log(procedures);
    });
    getCCDA('/immunization.json',function(immunizations){
      console.log(immunizations);
    });
    getCCDA('/medication.json',function(medications){
      console.log(medications);
    });
    getCCDA('/lab.json',function(labs){
      console.log(labs);
    });
    getCCDA('/encounter.json',function(encounters){
      console.log(encounters);
    });
    getCCDA('/vital.json',function(vitals){
      console.log(vitals);
    });
}

//This can be done on the backend as well
function getCCDA(url,callback){
     $.ajax({
        url: url,
        contentType: "application/json",
    }).done(function(data) {
      console.log(data);
    });
}