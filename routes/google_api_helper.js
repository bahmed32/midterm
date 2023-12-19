/*
 * All routes for lists Data are defined here
 * Since this file is loaded in server.js into api/lists,
 *   these routes are mounted onto /api/lists
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();



function authenticate() {
  return gapi.auth2.getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-platform" })
    .then(function () { console.log("Sign-in successful"); },
      function (err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("e07522f3a06fde1a05eeef8cb61a122b4068da00");
  return gapi.client.load("https://language.googleapis.com/$discovery/rest?version=v1")
    .then(function () { console.log("GAPI client loaded for API"); },
      function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
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
    },
      function (err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({ client_id: "269683579985-3af5iq7352uj1cus9o9j4mo1e28g5peu.apps.googleusercontent.com" });
});

module.exports = { router, authenticate, loadClient, execute };
