"use strict";

// Defines helper functions for saving and getting lists, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a list to `db`
    saveList: function(newList, callback) {
        db.lists.push(newList);
        callback(null, true);
      },

    // Get all lists in `db`
    getLists: function(callback) {
      const lists = db.lists
      callback(null, lists);
      }
    }
  };

