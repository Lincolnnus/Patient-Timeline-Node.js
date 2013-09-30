/*
Copyright (C) 2013 Shaohuan Li <shaohuan.li@gmail.com>, Ashish Sharma <ashish.sharma@emory.edu>
This file is part of A Timeline Viewer of Patient Medical Records developed under the Google of Summer of Code 2013 program.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , partials = require('express-partials');

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
app.use(express.bodyParser({keepExtensions: true, uploadDir: __dirname + "/public/timeline/uploads"}));
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
routes(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Timeline server listening on port ' + app.get('port'));
});