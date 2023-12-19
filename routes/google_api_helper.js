/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { google } = require('googleapis');
const googleapis = require('googleapis');
const router = express.Router();
const gapi = require('gapi');
const coffescript = require('coffee-script/register');



function authenticate() {
  console.log("authenticating");
  return gapi.auth2.getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-platform" })
    .then(function () { console.log("Sign-in successful"); })
    .catch(function (err) { console.error("Error signing in", err); });
}

function loadClient() {
  console.log("loading client");
  gapi.client.setApiKey("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");
  return gapi.client.load("https://language.googleapis.com/$discovery/rest?version=v1")  
    .then(function () { console.log("GAPI client loaded for API"); })
    .catch(function (err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
$(document).ready(function (event) {
$('#writeNew').click(function () {
function execute() {
  return gapi.client.language.documents.classifyText({
    "resource": {
      "document": {
        "content": `Jim Carrey`,
        "type": "PLAIN_TEXT",
        "language": ""
      },
      "classificationModelOptions": {
        "v2Model": {
          "contentCategoriesVersion": "V2"
        }
      }
    }
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    })
    .catch(function (err) {
      console.error("Execute error", err);
    })
    .finally(function () {
      gapi.load("client:auth2", function () {
        gapi.auth2.init({ client_id: "269683579985-3af5iq7352uj1cus9o9j4mo1e28g5peu.apps.googleusercontent.com" });
      });
    });
}
})
})

module.exports = { router, authenticate, loadClient, execute };
