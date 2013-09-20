
/**
 * Module dependencies.
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