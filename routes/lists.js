/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const listQueries = require('../db/queries/lists');
const fetchListsFromDatabase = require('../lib/data-helpers').fetchListsFromDatabase;
const execute = require('../lib/data-helpers').excute;

const fs = require('fs');
const key = fs.readFileSync('/home/labber/midterm/client_secret.json');
const coffeescript = require('coffee-script/register');

const client = new language.LanguageServiceClient({ keyFilename: '/home/labber/midterm/client_secret.json', });

// GET /lists

router.get('/lists', (req, res) => {
  // Fetch the lists from your database

});

router.post('/lists', (req, res) => {

  res.json(response);

});


module.exports = router;