var crypto = require('crypto');
var User = require('../models/user.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
      res.render('index', {
        title: 'Home'
      });
  });
  
  app.get('/reg', checkNotLogin);
  app.get('/reg', function(req, res) {
    res.render('reg', {
      title: 'Register',
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
          console.log('error');
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
  
  app.get('/u/:user', function(req, res) {
    User.get(req.params.user, function(err, user) {
      if (!user) {
    	req.flash('error', 'No Such User');
        return res.redirect('/');
      }
      Post.get(user.name, function(err, posts) {
        if (err) {
    	  req.flash('error', err);
          return res.redirect('/');
        }
        res.render('user', {
          title: user.name,
          posts: posts,
        });
      });
    });
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