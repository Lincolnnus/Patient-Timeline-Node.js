/*
Copyright (C) 2013 Shaohuan Li <shaohuan.li@gmail.com>, Ashish Sharma <ashish.sharma@emory.edu>
This file is part of A Timeline Viewer of Patient Medical Records developed under the Google of Summer of Code 2013 program.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
//Show Detail Page Using Ajax
function showDetailAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/problem.json',function(problems){
        new EJS({url: '/timeline/templates/problems.ejs'}).update('problems', {problems: problems});
    });
    getCCDA('/timeline/procedure.json',function(procedures){
        new EJS({url: '/timeline/templates/procedures.ejs'}).update('procedures', {procedures: procedures});
    });
    getCCDA('/timeline/immunization.json',function(immunizations){
        new EJS({url: '/timeline/templates/immunizations.ejs'}).update('immunizations', {immunizations: immunizations});
    });
    getCCDA('/timeline/medication.json',function(medications){
        new EJS({url: '/timeline/templates/medications.ejs'}).update('medications', {medications: medications});
    });
    getCCDA('/timeline/encounter.json',function(encounters){
        new EJS({url: '/timeline/templates/encounters.ejs'}).update('encounters', {encounters: encounters});
    });
}
//Show Timeline Page Using Ajax
function showTimelineAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/allergy.json',function(allergies){
        new EJS({url: '/timeline/templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    });
    getCCDA('/timeline/timeline.json',function(timeline){
      new EJS({url: '/timeline/templates/timeline.ejs'}).update('timeline', {timeline: restructureTimeline(timeline)});
    });
}
//Show Labs Page Using Ajax
function showLabsAjax(){
    getCCDA('/timeline/demographics.json',function(demographics){
      new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    });
    getCCDA('/timeline/lab.json',function(labs){
      new EJS({url: '/timeline/templates/labs.ejs'}).update('labs', {labs: labs});
    });
}

//Ajax Call to the CCDA Timeline API.
function getCCDA(url,callback){
     $.ajax({
        url: url,
        contentType: "application/json",
    }).done(function(data) {
      callback(data);
    });
}

//Normal Show Detail without Ajax
function showDetail(){
    new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '/timeline/templates/immunizations.ejs'}).update('immunizations', {immunizations: immunizations});
    new EJS({url: '/timeline/templates/encounters.ejs'}).update('encounters', {encounters: encounters});
    new EJS({url: '/timeline/templates/medications.ejs'}).update('medications', {medications: medications});
    new EJS({url: '/timeline/templates/problems.ejs'}).update('problems', {problems: problems});
    new EJS({url: '/timeline/templates/procedures.ejs'}).update('procedures', {procedures: procedures});
}

//Normal Show Timeline without Ajax
function showTimeline(){
    new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
    new EJS({url: '/timeline/templates/allergies.ejs'}).update('allergies', {allergies: allergies});
    new EJS({url: '/timeline/templates/timeline.ejs'}).update('timeline', {timeline: restructureTimeline(timeline)});
}

//Restruct Timeline Data with Raw Timeline Data
function restructureTimeline(timeline){
  var restruct = [];
  for (var i=0; i<timeline.length; i++){
    restruct = mergeTimeline(restruct,timeline[i]);
  }
  return restruct.sort(function(a,b) { return parseFloat(b.year) - parseFloat(a.year) } );
}

//Merge Timeline Data Based on Year
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
//Normal Show Labs
function showLabs(){
  new EJS({url: '/timeline/templates/demographics.ejs'}).update('demographics', {demographics: demographics});
  new EJS({url: '/timeline/templates/labs.ejs'}).update('labs', {labs: labs});
}

//Format Date Given Json Date data
function formatDate(jsonDate)
{
  if(jsonDate == null){
    return 'Now';
  }else{
  var year = jsonDate.substr(0,4);
  var month= jsonDate.substr(5,2);
  switch (month){
    case '01': month='Jan';
    break;
    case '02':month='Feb';
    break;
    case '03': month='Mar';
    break;
    case '04':month='Apr';
    break;
    case '05': month='May';
    break;
    case '06':month='Jun';
    break;
    case '07': month='Jul';
    break;
    case '08':month='Aug';
    break;
    case '09': month='Sep';
    break;
    case '10':month='Oct';
    break;
    case '11':month='Nov';
    break;
    case '12':month='Dec';
    break;
  }
  var date = jsonDate.substr(8,2);
  return year+'.'+month+'.'+date;
  }
}

//Click Show More Url
function showMore(url){
  window.open(url);
}