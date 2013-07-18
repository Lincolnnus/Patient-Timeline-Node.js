
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , partials = require('express-partials');

var demographicsUrl = '/services/ccda/demographics/query/demographics?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
allergyUrl = '/services/ccda/allergy/query/allergy?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
immunizationUrl = '/services/ccda/immunization/query/immunization?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
medicationUrl = '/services/ccda/medication/query/medication?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
labUrl = '/services/ccda/lab/query/lab?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';

var app = express();
var settings = require('./settings'); 
var MongoStore = require('connect-mongo')(express);
var flash = require('connect-flash');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());   
app.use(express.session({secret: settings.cookieSecret,store: new MongoStore({db: settings.db})}));  
app.use(flash()); 
app.use(function (req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/user/:uid',function(req,res){
  res.render('timeline',{
    title:'TimeLine',
    uid:req.params.uid
  });
  getCCDA(demographicsUrl,req.params.uid,function(demographics){
    displayDemographics(demographics);
  });
  getCCDA(allergyUrl,req.params.uid,function(allergies){
    displayAllergies(allergies);
  });
  getCCDA(medicationUrl,req.params.uid,function(medications){
    displayMedications(medications);
  });
  getCCDA(immunizationUrl,req.params.uid,function(immunizations){
    displayImmunizations(immunizations);
  });
});
app.get('/user/:uid/demographics',function(req,res){
  getCCDA(demographicsUrl,req.params.uid,function(demographics){
    displayDemographics(demographics);
    res.render('demographics',{
      title:'Demographics',
      demographics:JSON.parse(demographics)[0]
    });
  });
});
app.get('/user/:uid/allergies',function(req,res){
  getCCDA(allergyUrl,req.params.uid,function(allergies){
    displayAllergies(allergies);
    res.render('allergies',{
      title:'Allergies',
      allergies:JSON.parse(allergies)
    });
  });
});
app.get('/user/:uid/medications',function(req,res){
  getCCDA(medicationUrl,req.params.uid,function(medications){
    displayMedications(medications);
    res.render('medications',{
      title:'Medications',
      medications:JSON.parse(medications)
    });
  });
});
app.get('/user/:uid/immunizations',function(req,res){
  getCCDA(immunizationUrl,req.params.uid,function(immunizations){
    displayImmunizations(immunizations);
    res.render('immunizations',{
      title:'Immunizations',
      immunizations:JSON.parse(immunizations)
    });
  });
});
routes(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Timeline server listening on port ' + app.get('port'));
});

function displayAllergies(allergies){
}
function displayMedications(medications){
}
function displayDemographics(demographics){
    $('#demographics').append('demographics',{
      title:'Demographics',
      demographics:JSON.parse(demographics)[0]
    });
}
function displayImmunizations(immunizations){
}
function getCCDA(url,uid,callback){
 var options = {
    host: 'localhost',
    path: url+'&uid='+uid,
    port: '9099'
}
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
