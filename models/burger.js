//The model for a burger
//Import the ORM object to create functions that will interact with the database.

var orm = require("../config/orm.js");

//create the burger object (model)

var burger = {
    //inside selectAll for burger model call selectAll orm function and pass it the table name the callback function
    selectAll: function(cb) {  
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    //inside the insertOne burger model function call the insertOne orm function and pass it the table
    //name, the columns to insert and the corresponding values, and the callback function
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    //inside the updateOne burger model function call the updateOne orm function and pass it the table name,
    //the key-value pairs for columns and the values, the where clause condition and the callback function
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  
  
  // Export the database functions for the controller (burgers_controller.js)
  module.exports = burger;