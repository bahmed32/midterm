/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const listQueries = require('../db/queries/lists');
const googleApi = require('./google_api_helper');
const authenticate = require('./google_api_helper');
const 

router.post('/', (req, res) => {
  console.log(req.body);
  res.render('users');
});

module.exports = router;
