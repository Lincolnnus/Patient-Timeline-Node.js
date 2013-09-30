/*
Copyright (C) 2013 Shaohuan Li <shaohuan.li@gmail.com>, Ashish Sharma <ashish.sharma@emory.edu>
This file is part of A Timeline Viewer of Patient Medical Records developed under the Google of Summer of Code 2013 program.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
//User Model Setup
var mongodb = require('./db');

function User(user) {
  this.name = user.name;
  this.password = user.password;
  this.xml = user.xml;
  this.uid = user.uid;
};
module.exports = User;

User.prototype.save = function save(callback) {
  // save to mongodb
  var user = {
    name: this.name,
    password: this.password,
    xml:this.xml,
    user:this.uid
  };
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    // read users collection
      // read users collection
    db.collection('counters', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // write to user
      collection.findAndModify({ _id: 'uid' }, [], { $inc: { seq: 1 } }, {}, function(err, res) {
        if (res) {
            db.collection('users', function(err, collection) {
            if (err) {
              mongodb.close();
              return callback(err);
            }
            // ensure names to be unique
            collection.ensureIndex('name', {unique: true},function(err){
              mongodb.close();
              callback(err,null);
            });
            // write to user
            user.uid = res.seq;
            collection.insert(user, {safe: true}, function(err, user) {
              mongodb.close();
              callback(err, user);
            });
          });
        } else {      
          mongodb.close();
          callback(err, null);
        }
      });
    });
  });
};
User.prototype.update = function update(callback) {
  // save to mongodb
  var user = {
    name: this.name,
    password: this.password,
    xml:this.xml,
    uid:this.uid
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

