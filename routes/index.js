var crypto = require('crypto');
var User = require('../models/user.js');
var fs = require('fs')
  , http = require('http')
  , _ = require('underscore')
  , path = require('path')
  , BlueButton = require(path.join(__dirname, '../node_modules/bluebutton/build/bluebutton'));

var saveDemographicsUrl = 'http://localhost:9099/services/ccda/demographics/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
saveAllergyUrl = 'http://localhost:9099/services/ccda/allergy/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
saveImmunizationUrl = 'http://localhost:9099/services/ccda/immunization/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
saveMedicationUrl = 'http://localhost:9099/services/ccda/medication/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
saveLabUrl = 'http://localhost:9099/services/ccda/lab/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';
saveEncounterUrl = 'http://localhost:9099/services/ccda/encounter/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';
saveProblemUrl = 'http://localhost:9099/services/ccda/problem/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';
saveProcedureUrl ='http://localhost:9099/services/ccda/procedure/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';
saveVitalUrl = 'http://localhost:9099/services/ccda/vital/submit/mongo?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';

module.exports = function(app) {
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
  
  app.get('/reg', checkNotLogin);
  app.get('/reg', function(req, res) {
    res.render('reg', {
      title: 'Register',
    });
  });
  app.get('/upload',checkLogin);
  app.get('/upload',function(req,res){
    res.render('upload',{
      title:'Upload',
    });
  });
  app.post('/upload',checkLogin);
  app.post('/upload',function(req,res){
     if (req.files) {
        req.body.url = "http://localhost:3000/" + req.files.ccda.path.split("/").slice(-2).join("/")
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
            return res.redirect('/upload');
          }
          //upload to bindaas api
          uploadToBindaas(currentUser.uid,currentUser.xml);
          req.session.user = currentUser;
          req.flash('success', 'Successfully Uploaded');
          res.redirect('/');
        });
      });
  });
  app.post('/reg', checkNotLogin);
  app.post('/reg', function(req, res) {
    //username must be longer than 0 chars
    if (req.body.username.length < 1) {
      req.flash('error', 'Please Enter A Valid User Name');
      return res.redirect('/reg');
    }
    //password must be longer than 3 chars
    if (req.body.password.length < 3){
      req.flash('error', 'Passwords Must Be Longer Than 2 Chars');
      return res.redirect('/reg');
    }
    //passwords don't match
    if (req.body['password-repeat'] != req.body['password']) {
      req.flash('error', 'Passwords don\'t match');
      return res.redirect('/reg');
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
        return res.redirect('/reg');
      }
      //add new user
      newUser.save(function(err) {
        if (err) {
          req.flash('error', err);
          return res.redirect('/reg');
        }
        req.session.user = newUser;
        req.flash('success', 'Successfully Registered');
        res.redirect('/');
      });
    });
  });
  
  app.get('/login', checkNotLogin);
  app.get('/login', function(req, res) {
    res.render('login', {
      title: 'Login',
    });
  });

  app.post('/login', checkNotLogin);
  app.post('/login', function(req, res) {
    //generate md5 value
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');
    
    User.get(req.body.username, function(err, user) {
      if (!user) {
    	req.flash('error', 'No Such User');
      	return res.redirect('/login');
      }
      if (user.password != password) {
    	req.flash('error', 'Wrong Password');
        return res.redirect('/login');
      }
      req.session.user = user;
      req.flash('success', 'Successfully Logged In');
      res.redirect('/');
    });
  });
  
  app.get('/logout', checkLogin);
  app.get('/logout', function(req, res) {
    req.session.user = null;
    req.flash('success', 'Successfully Logged Out');
    res.redirect('/');
  });
};

function checkLogin(req, res, next) {
  if (!req.session.user) {
  	req.flash('error', 'Not Logged In');
    return res.redirect('/login');
  }
  next();
}
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
      }
      for (var i=0;i<labs.length;i++){
        labs[i].uid = uid;
        saveCCDA(saveLabUrl,labs[i]);
      }
      for (var i=0;i<immunizations.length;i++){
        immunizations[i].uid = uid;
        saveCCDA(saveImmunizationUrl,immunizations[i]);
      }
      for (var i=0;i<procedures.length;i++){
        procedures[i].uid = uid;
        saveCCDA(saveProcedureUrl,procedures[i]);
      }
      for (var i=0;i<problems.length;i++){
        problems[i].uid = uid;
        saveCCDA(saveProblemUrl,problems[i]);
      }
      for (var i=0;i<vitals.length;i++){
        vitals[i].uid = uid;
        saveCCDA(saveVitalUrl,vitals[i]);
      }
      for (var i=0;i<encounters.length;i++){
        encounters[i].uid = uid;
        saveCCDA(saveEncounterUrl,encounters[i]);
      }
}

function saveCCDA(url,data)
{
  var request = require('request');
  var options = {
    uri: url,
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
function checkNotLogin(req, res, next) {
  if (req.session.user) {
    req.flash('error', 'Already Logged In');
    return res.redirect('/');
  }
  next();
}

function toJSON(target) {
  return JSON.parse(target.json())
}