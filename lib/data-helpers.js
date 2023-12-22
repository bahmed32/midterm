"use strict";

// Defines helper functions for saving and getting lists, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves an item to `db`
    saveItem: function(newItem, callback) {
        db.items.push(newItem);
        callback(null, true);
      },

    // Get all lists in `db`
    getLists: function(callback) {
      const lists = db.lists
      callback(null, lists);
      }
    }
  };

