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

router.get('/lists', (req, res) => {
  // Fetch the lists from your database
  // const lists = fetchListsFromDatabase();

  // // Send the lists as a JSON response
  // res.json(lists);
});

router.post('/lists', (req, res) => {
console.log('ASDFASDFASDFASDFASF', req.body);
  const list = {
    text: req.body.text
  };

  // Send the list as a JSON response
  res.json(list);
});


module.exports = router;