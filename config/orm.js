var connection = require('../config/connection.js');

var orm = {
  all: function(table, cb) {
    var queryString = 'SELECT * FROM ' + table + ';';
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') VALUES (?)';
    console.log(queryString);
    connection.query(queryString, [vals], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + objColVals + ' WHERE ' + condition;
    console.log(queryString);
    console.log(objColVals);
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
