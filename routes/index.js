var crypto = require('crypto');
var User = require('../models/user.js');
var fs = require('fs')
  , _ = require('underscore')
  , path = require('path')
  , BlueButton = require(path.join(__dirname, '../node_modules/bluebutton/build/bluebutton'));

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