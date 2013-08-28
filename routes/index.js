var api_key="105bf231-a566-4350-8a70-b555f5eb7832";
var api_domain= "localhost";
var api_port = "9099";

var crypto = require('crypto');
var User = require('../models/user.js');
var fs = require('fs')
  , http = require('http')
  , _ = require('underscore')
  , path = require('path')
  , BlueButton = require(path.join(__dirname, '../node_modules/bluebutton/build/bluebutton'));

var saveDemographicsUrl = '/services/ccda/demographics/submit/json',
saveAllergyUrl = '/services/ccda/allergy/submit/json',
saveImmunizationUrl = '/services/ccda/immunization/submit/json',
saveMedicationUrl = '/services/ccda/medication/submit/json',
saveLabUrl = '/services/ccda/lab/submit/json',
saveEncounterUrl = '/services/ccda/encounter/submit/json',
saveProblemUrl = '/services/ccda/problem/submit/json',
saveProcedureUrl ='/services/ccda/procedure/submit/json',
saveVitalUrl = '/services/ccda/vital/submit/json';
saveTimelineUrl = '/services/ccda/timeline/submit/json';

var demographicsUrl = '/services/ccda/demographics/query/demographics',
problemUrl = '/services/ccda/problem/query/problem',
allergyUrl = '/services/ccda/allergy/query/allergy',
immunizationUrl = '/services/ccda/immunization/query/immunization',
medicationUrl = '/services/ccda/medication/query/medication',
labUrl = '/services/ccda/lab/query/lab',
encounterUrl = '/services/ccda/encounter/query/encounter',
procedureUrl = '/services/ccda/procedure/query/procedure',
vitalUrl = '/services/ccda/vital/query/vital';
timelineUrl = '/services/ccda/timeline/query/timeline';

module.exports = function(app) {
  app.locals.formatDate = function(jsonDate)
  {
    if(jsonDate == null){
      return 'Now';
    }else{
    var date = new Date(parseInt(jsonDate.substr(6)));
    return date.toGMTString().substr(5,11);
    }
  }
  app.get('/', function(req, res) {
     if ((req.session.user)&&(req.session.user.xml!=null))
     {
          var record = fs.readFileSync(path.resolve(__dirname, '../public/'+req.session.user.xml), 'utf-8');
          var bb = BlueButton(record);
          res.render('index', {
            title: 'Home',
            allergies:toJSON(bb.allergies()),
            demographics:toJSON(bb.demographics()),
            medications:toJSON(bb.medications()),
            immunizations:toJSON(bb.immunizations()),
            labs:toJSON(bb.labs()),
            encounters:toJSON(bb.encounters()),
            medications:toJSON(bb.medications()),
            problems:toJSON(bb.problems()),
            procedures:toJSON(bb.procedures()),
            vitals:toJSON(bb.vitals())
          });
      }else{
          res.render('index', {
            title: 'Home',
            allergies:[],
            demographics:[],
            medications:[],
            immunizations:[],
            labs:[],
            encounters:[],
            medications:[],
            problems:[],
            procedures:[],
            vitals:[]
          });
      }
  });
  app.get('/timeline', function(req, res) {
     if ((req.session.user)&&(req.session.user.xml!=null))
     {
          var record = fs.readFileSync(path.resolve(__dirname, '../public/'+req.session.user.xml), 'utf-8');
          var bb = BlueButton(record);
          res.render('timeline', {
            title: 'Home',
            allergies:toJSON(bb.allergies()),
            demographics:toJSON(bb.demographics()),
            medications:toJSON(bb.medications()),
            immunizations:toJSON(bb.immunizations()),
            labs:toJSON(bb.labs()),
            encounters:toJSON(bb.encounters()),
            medications:toJSON(bb.medications()),
            problems:toJSON(bb.problems()),
            procedures:toJSON(bb.procedures()),
            vitals:toJSON(bb.vitals())
          });
      }else{
          res.render('timeline', {
            title: 'Home',
            allergies:[],
            demographics:[],
            medications:[],
            immunizations:[],
            labs:[],
            encounters:[],
            medications:[],
            problems:[],
            procedures:[],
            vitals:[]
          });
      }
  });
  app.get('/timeline/detail', function(req, res) {
     if ((req.session.user)&&(req.session.user.xml!=null))
     {
          var record = fs.readFileSync(path.resolve(__dirname, '../public/'+req.session.user.xml), 'utf-8');
          var bb = BlueButton(record);
          res.render('detail', {
            title: 'Detail',
            allergies:toJSON(bb.allergies()),
            demographics:toJSON(bb.demographics()),
            medications:toJSON(bb.medications()),
            immunizations:toJSON(bb.immunizations()),
            labs:toJSON(bb.labs()),
            encounters:toJSON(bb.encounters()),
            medications:toJSON(bb.medications()),
            problems:toJSON(bb.problems()),
            procedures:toJSON(bb.procedures()),
            vitals:toJSON(bb.vitals())
          });
      }else{
          res.render('detail', {
            title: 'Detail',
            allergies:[],
            demographics:[],
            medications:[],
            immunizations:[],
            labs:[],
            encounters:[],
            medications:[],
            problems:[],
            procedures:[],
            vitals:[]
          });
      }
  });
  app.get('/timeline/labs', function(req, res) {
     if ((req.session.user)&&(req.session.user.xml!=null))
     {
          var record = fs.readFileSync(path.resolve(__dirname, '../public/'+req.session.user.xml), 'utf-8');
          var bb = BlueButton(record);
          res.render('labs', {
            title: 'Labs',
            allergies:toJSON(bb.allergies()),
            demographics:toJSON(bb.demographics()),
            medications:toJSON(bb.medications()),
            immunizations:toJSON(bb.immunizations()),
            labs:toJSON(bb.labs()),
            encounters:toJSON(bb.encounters()),
            medications:toJSON(bb.medications()),
            problems:toJSON(bb.problems()),
            procedures:toJSON(bb.procedures()),
            vitals:toJSON(bb.vitals())
          });
      }else{
          res.render('labs', {
            title: 'Labs',
            allergies:[],
            demographics:[],
            medications:[],
            immunizations:[],
            labs:[],
            encounters:[],
            medications:[],
            problems:[],
            procedures:[],
            vitals:[]
          });
      }
  });
  
  app.get('/timeline/reg', checkNotLogin);
  app.get('/timeline/reg', function(req, res) {
    res.render('reg', {
      title: 'Register',
    });
  });
  app.get('/timeline/upload',checkLogin);
  app.get('/timeline/upload',function(req,res){
    res.render('upload',{
      title:'Upload',
    });
  });
  app.post('/timeline/upload',checkLogin);
  app.post('/timeline/upload',function(req,res){
     if (req.files) {
        req.body.path = req.files.ccda.path.split("/").slice(-2).join("/")
      }
      var currentUser = new User(req.session.user);
      currentUser.xml = req.body.path;
      //user already exists
      User.get(currentUser.name, function(err, user) {
        //update current user
        currentUser.update(function(err) {
          if (err) {
            req.flash('error', err);
            return res.redirect('/timeline/upload');
          }
          //upload to bindaas api
          uploadToBindaas(currentUser.uid,currentUser.xml);
          req.session.user = currentUser;
          req.flash('success', 'Successfully Uploaded');
          res.redirect('/timeline');
        });
      });
  });
  app.post('/timeline/reg', checkNotLogin);
  app.post('/timeline/reg', function(req, res) {
    //username must be longer than 0 chars
    if (req.body.username.length < 1) {
      req.flash('error', 'Please Enter A Valid User Name');
      return res.redirect('/timeline/reg');
    }
    //password must be longer than 3 chars
    if (req.body.password.length < 3){
      req.flash('error', 'Passwords Must Be Longer Than 2 Chars');
      return res.redirect('/timeline/reg');
    }
    //passwords don't match
    if (req.body['password-repeat'] != req.body['password']) {
      req.flash('error', 'Passwords don\'t match');
      return res.redirect('/timeline/reg');
    }
    //get the md5 value of the password
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
    var newUser = new User({
      name: req.body.username,
      password: password,
      xml:null
    });
    
    //user already exists
    User.get(newUser.name, function(err, user) {
      if (user)
        err = 'Username already exists.';
      if (err) {
      	req.flash('error', err);
        return res.redirect('/timeline/reg');
      }
      //add new user
      newUser.save(function(err) {
        if (err) {
          req.flash('error', err);
          return res.redirect('/timeline/reg');
        }
        req.session.user = newUser;
        req.flash('success', 'Successfully Registered');
        res.redirect('/timeline');
      });
    });
  });
  //get login
  app.get('/timeline/login', checkNotLogin);
  app.get('/timeline/login', function(req, res) {
    res.render('login', {
      title: 'Login',
    });
  });
  //post login
  app.post('/timeline/login', checkNotLogin);
  app.post('/timeline/login', function(req, res) {
    //generate md5 value
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
    User.get(req.body.username, function(err, user) {
      if (!user) {
    	req.flash('error', 'No Such User');
      	return res.redirect('/timeline/login');
      }
      if (user.password != password) {
    	req.flash('error', 'Wrong Password');
        return res.redirect('/timeline/login');
      }
      req.session.user = user;
      req.flash('success', 'Successfully Logged In');
      res.redirect('/timeline');
    });
  });
  //logout
  app.get('/timeline/logout', checkLogin);
  app.get('/timeline/logout', function(req, res) {
    req.session.user = null;
    req.flash('success', 'Successfully Logged Out');
    res.redirect('/timeline');
  });
  app.get('/timeline/demographics.json',function(req,res){
      getCCDA(demographicsUrl,req.session.user.uid,function(demographics){
      res.send(JSON.parse(demographics)[0]);
    });
  });
  app.get('/timeline/allergy.json',function(req,res){
      getCCDA(allergyUrl,req.session.user.uid,function(allergies){
      res.send(JSON.parse(allergies));
    });
  });
  app.get('/timeline/immunization.json',function(req,res){
      getCCDA(immunizationUrl,req.session.user.uid,function(immunizations){
      res.send(JSON.parse(immunizations));
    });
  });
  app.get('/timeline/medication.json',function(req,res){
      getCCDA(medicationUrl,req.session.user.uid,function(medications){
      res.send(JSON.parse(medications));
    });
  });
  app.get('/timeline/lab.json',function(req,res){
      getCCDA(labUrl,req.session.user.uid,function(labs){
      res.send(JSON.parse(labs));
    });
  });
  app.get('/timeline/encounter.json',function(req,res){
      getCCDA(encounterUrl,req.session.user.uid,function(encounters){
      res.send(JSON.parse(encounters));
    });
  });
  app.get('/timeline/problem.json',function(req,res){
      getCCDA(problemUrl,req.session.user.uid,function(problems){
      res.send(JSON.parse(problems));
    });
  });
  app.get('/timeline/procedure.json',function(req,res){
      getCCDA(procedureUrl,req.session.user.uid,function(procedures){
      res.send(JSON.parse(procedures));
    });
  });
  app.get('/timeline/vital.json',function(req,res){
      getCCDA(vitalUrl,req.session.user.uid,function(vitals){
      res.send(JSON.parse(vitals));
    });
  });
  app.get('/timeline/timeline.json',function(req,res){
      getCCDA(timelineUrl,req.session.user.uid,function(timeline){
      res.send(JSON.parse(timeline));
    });
  });
  //Get the timeline view
  app.get('/timeline/timeline',function(req,res){
  res.render('timeline',{
    title:'TimeLine',
    uid:req.session.user.uid
  });
});
};
//upload the xml to the bindaas api via the bindaas api using the bluebutton.js
function uploadToBindaas(uid,xml){

    var record = fs.readFileSync(path.resolve(__dirname, '../public/'+xml), 'utf-8');
    var bb = BlueButton(record);
    var allergies = bb.allergies(),
      demographics = bb.demographics(),
      medications = bb.medications(),
      immunizations = bb.immunizations(),
      labs = bb.labs(),
      encounters =bb.encounters(),
      medications = bb.medications(),
      problems = bb.problems(),
      procedures = bb.procedures(),
      vitals = bb.vitals();
      demographics.uid = uid;
      saveCCDA(saveDemographicsUrl,demographics);
      for (var i=0;i<allergies.length;i++){
        allergies[i].uid = uid;
        saveCCDA(saveAllergyUrl,allergies[i]);
      }
      for (var i=0;i<medications.length;i++){
        medications[i].uid = uid;
        saveCCDA(saveMedicationUrl,medications[i]);
        var record=new Object();
        record.uid= uid;
        record.title= medications[i].product.name;
        record.date= medications[i].date_range.start;
        record.dateend= medications[i].date_range.end;
        record.type='medication';
        saveCCDA(saveTimelineUrl,record);
      }
      for (var i=0;i<labs.length;i++){
        labs[i].uid = uid;
        saveCCDA(saveLabUrl,labs[i]);
      }
      for (var i=0;i<immunizations.length;i++){
        immunizations[i].uid = uid;
        saveCCDA(saveImmunizationUrl,immunizations[i]);
        var record=new Object();
        record.uid= uid;
        record.title= immunizations[i].product.name;
        record.date= immunizations[i].date;
        record.dateend= immunizations[i].date;
        record.type='immunization';
        saveCCDA(saveTimelineUrl,record);
      }
      for (var i=0;i<procedures.length;i++){
        procedures[i].uid = uid;
        saveCCDA(saveProcedureUrl,procedures[i]);
        var record=new Object();
        record.uid= uid;
        record.title= procedures[i].name;
        record.date= procedures[i].date;
        record.dateend= procedures[i].date;
        record.type='procedure';
        saveCCDA(saveTimelineUrl,record);
      }
      for (var i=0;i<problems.length;i++){
        problems[i].uid = uid;
        saveCCDA(saveProblemUrl,problems[i]);
        var record=new Object();
        record.uid= uid;
        record.title= problems[i].name;
        record.date= problems[i].date_range.start;
        record.dateend= problems[i].date_range.end;
        record.type='problem';
        saveCCDA(saveTimelineUrl,record);
      }
     /* for (var i=0;i<vitals.length;i++){
        vitals[i].uid = uid;
        saveCCDA(saveVitalUrl,vitals[i]);
      }*/
      for (var i=0;i<encounters.length;i++){
        encounters[i].uid = uid;
        saveCCDA(saveEncounterUrl,encounters[i]);
        var record=new Object();
        record.uid= uid;
        record.title= encounters[i].name;
        record.date= encounters[i].date;
        record.dateend= encounters[i].date;
        record.type='encounter';
        saveCCDA(saveTimelineUrl,record);
      }
}
//save the ccda via bindaas post api
function saveCCDA(url,data)
{
  var request = require('request');
  var options = {
    uri: 'http://'+api_domain+':'+api_port+url+'?api_key='+api_key,
    method: 'POST',
    json: data
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("data successfully added to bindaas"); // Print the shortened url.
    }else{
      console.log(error);
      console.log(response.statusCode);
    }
  });
}
//Check the user is logged in 
function checkLogin(req, res, next) {
  if (!req.session.user) {
    req.flash('error', 'Not Logged In');
    return res.redirect('/timeline/login');
  }
  next();
}
//Check the user is not logged in
function checkNotLogin(req, res, next) {
  if (req.session.user) {
    req.flash('error', 'Already Logged In');
    return res.redirect('/timeline');
  }
  next();
}

function toJSON(target) {
  return JSON.parse(target.json())
}
//This can be done on the backend as well
function getCCDA(url,uid,callback){
 var options = {
    host: api_domain,
    path: url+'?api_key='+api_key+'&uid='+uid,
    port: api_port
}
//Get the bindaas api
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
      callback(data);
    });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();
}