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

// GET /lists

router.get('/lists', (req, res) => {
  // Fetch the lists from your database
});

router.post('/lists', (req, res) => {
  // Create a new list
    res.json(response);
});

module.exports = router;