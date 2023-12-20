/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const listQueries = require('../db/queries/lists');
const coffescript = require('coffee-script/register');
const fetchListsFromDatabase = require('../lib/data-helpers').fetchListsFromDatabase;
const execute = require('../lib/data-helpers').excute;

router.get('/lists', (req, res) => {

  // Fetch the lists from your database
  const lists = fetchListsFromDatabase();

  // Send the lists as a JSON response
  res.json(lists);
});

router.post('/lists', (req, res) => {
  const data = req.body;
  execute(data)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (err) {
      console.error("execute error", err);
      res.status(500).json({ error: err.message });
    });

});


module.exports = router;