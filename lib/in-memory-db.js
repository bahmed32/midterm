"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example lists to make it less tedious to style the app initially.
const db = {
  lists: require("../db/")
}

module.exports = db;

