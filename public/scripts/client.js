const { Pool } = require('pg');

// Client facing scripts here

// Escape function to prevent XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Authenticate API key on document load

$(document).ready(function () {
  authenticate = () => {
    console.log("authenticating");
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-platform" })
      .then(function () { console.log("Sign-in successful"); })
      .catch(function (err) { console.error("Error signing in", err); });
  }
  loadClient = () => {
    console.log("loading client");
    gapi.client.setApiKey(process.env.API_KEY);
    gapi.client.load("https://language.googleapis.com/$discovery/rest?version=v1")
      .then(function () {
        console.log("GAPI client loaded for API");
      })
      .catch(function (err) {
        console.error("Error loading GAPI client for API", err);
      });
  }
});

// Create list item element from list item data
$("#taskInput").keyup(function (event) {
  event.preventDefault();
  const data = $(this).val();
  gapi.client.language.documents.classifyText({
    "resource": {
      "document": {
        "content": data,
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
      console.log("Response", response);
      return $.ajax({
        type: "POST",
        url: "/lists",
        data: response,
      });
    })
    .then(function (response) {
      console.log("Response", response);
    })
    .catch(function (err) {
      console.error("Execute error", err);
    });
});

gapi.load("client:auth2", function () {
  gapi.auth2.init({ client_id: "269683579985-3af5iq7352uj1cus9o9j4mo1e28g5peu.apps.googleusercontent.com" });
});


// validate and submit item when button is clicked
// $(document).ready(function () {
//   const loadLists = function () {
//     $.ajax('/lists', { method: 'POST' })
//       .then(function (response) {
//         console.log(response);
//       })
//   };
//   loadLists()
// });
// $("form").submit(function (event) {
//   event.preventDefault();

//   let formData = {
//     text: $('#textarea').val()
//   };

//   if (formData.text.length > 140) {
//     $('#textarea').addClass('error');
//     $('#error').remove();
//     $('#addButton').after('<p id="error">Your entry is too long!</p>');
//   }

//   if (formData.text.length === 0) {
//     $('#textarea').addClass('error');
//     $('#error').remove();
//     $('#addButton').after('<p id="error">Your entry is too short!</p>');
//   }

//   $.ajax({
//     type: "POST",
//     url: "/lists",
//     data: formData,
//   })
//     .done(() => {

//       $.get('/lists', function (theData) {
//         $('.list-container').prepend(createListElement(theData[theData.length - 1]));

//       });
//     });
// });
