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

router.post('/', (req, res) => {
  console.log(req.body);
  fetchCategory(req, res, next);

  res.render('users');
}); 


module.exports = router;
