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
    getCCDA('/timeline/timeline.json',function(timeline){
      new EJS({url: 'templates/timeline.ejs'}).update('timeline', {timeline: restructureTimeline(timeline)});
    });
}
function showLabsAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/lab.json',function(labs){
      new EJS({url: '../templates/labs.ejs'}).update('labs', {labs: labs});
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
function showDetail(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/immunizations.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '../templates/encounters.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '../templates/medications.ejs'}).update('medications', {medications: medications});
    new EJS({url: '../templates/problems.ejs'}).update('problems', {problems: problems});
    new EJS({url: '../templates/procedures.ejs'}).update('procedures', {procedures: procedures});
}
function showTimeline(){
    new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '../templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '../templates/timeline.ejs'}).update('timeline', {timeline: restructureTimeline(timeline)});
}
function restructureTimeline(timeline){
  var restruct = [];
  for (var i=0; i<timeline.length; i++){
    restruct = mergeTimeline(restruct,timeline[i]);
  }
  return restruct.sort(function(a,b) { return parseFloat(b.year) - parseFloat(a.year) } );
}
function mergeTimeline(restruct, record){
  var yearExist = false;
  for (var i=0;i<restruct.length;i++){
    if(record.date&&(restruct[i].year == record.date.substr(0,4))){
        restruct[i].data.push(record);
        restruct[i].data.sort(function(a,b) { a = new Date(a.date);b = new Date(b.date); return a>b?-1:a<b?1:0; } );
        yearExist = true;
    }
  }
  if (!yearExist&&record.date){
    var newRecord=new Object();
    newRecord.year = record.date.substr(0,4);
    newRecord.data = [];
    newRecord.data.push(record);
    restruct.push(newRecord);
  }
  return restruct;
}

function showLabs(){
  new EJS({url: '../templates/demographics.ejs'}).update('demographics', {demographics: demographics});
  new EJS({url: '../templates/labs.ejs'}).update('labs', {labs: labs});
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