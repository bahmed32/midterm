/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const listQueries = require('../db/queries/lists');
const coffescript = require('coffee-script/register');
const fetchListsFromDatabase = require('../lib/data-helpers').fetchListsFromDatabase;
const { authenticate, loadClient, execute } = require('./google_api_helper');

app.set('view engine', 'ejs');

router.get('/lists', (req, res) => {
  // Fetch the lists from your database
  // This is just a placeholder, replace it with your actual code
  const lists = fetchListsFromDatabase();

  // Send the lists as a JSON response
  res.json(lists);
});

router.post('/lists', (req, res) => {
  // Add a new list to your database
  // This is just a placeholder, replace it with your actual code
  const list = {
    text: req.body.text
  };

  // Send the list as a JSON response
  // res.json(list);
});


module.exports = router;