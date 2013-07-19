var mongodb = require('./db');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.xml = user.xml;
};
module.exports = User;

User.prototype.save = function save(callback) {
  // save to mongodb
  var user = {
    name: this.name,
    password: this.password,
    xml:this.xml
  };
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    // read users collection
    db.collection('users', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // ensure names to be unique
      collection.ensureIndex('name', {unique: true},function(err){
      	callback(err,null);
      });
      // write to user
      collection.insert(user, {safe: true}, function(err, user) {
        mongodb.close();
        callback(err, user);
      });
    });
  });
};

User.prototype.update = function update(callback) {
  // save to mongodb
  var user = {
    name: this.name,
    password: this.password,
    xml:this.xml
  };
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    // read users collection
    db.collection('users', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // update user
      collection.update({name: user.name}, {$set: {xml: user.xml}}, {safe: true}, function(err, user) {
        mongodb.close();
        callback(err, user);
      });
    });
  });
};

User.get = function get(username, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    // read users collection
    db.collection('users', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // find username of a user
      collection.findOne({name: username}, function(err, doc) {
        mongodb.close();
        if (doc) {
          // get user
          var user = new User(doc);
          callback(err, user);
        } else {
          callback(err, null);
        }
      });
    });
  });
};

