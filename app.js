
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
allergyUrl = 'http://localhost:9099/services/ccda/allergy/query/allergy?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
immunizationUrl = 'http://localhost:9099/services/ccda/immunization/query/immunization?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
medicationUrl = 'http://localhost:9099/services/ccda/medication/query/medication?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9',
labUrl = 'http://localhost:9099/services/ccda/lab/query/lab?api_key=5d36e104-bdfe-4ec1-975c-728154aa90f9';

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/user/:uid',function(req,res){
  getCCDA(demographicsUrl,req.params.uid,function(demographics){
    displayDemographics(demographics);
  });
  getCCDA(allergyUrl,req.params.uid,function(allergies){
    displayAllergies(allergies);
  });
  getCCDA(medicationUrl,req.params.uid,function(medications){
    displayMedications(medications);
  });
  res.send(req.params.uid);
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function displayAllergies(allergies){
  console.log("successfully get allergies");
  console.log(allergies);
}
function displayMedications(medications){
  console.log("successfully get medications");
  console.log(medications);
}
function displayDemographics(demographics){
  console.log("successfully get demographics");
  console.log(demographics);
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
