const gapi = require('gapi');
// Client facing scripts here

// Escape function to prevent XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Authenticate API key on document load

$(document).ready(function () {
  function loadClient() {
    console.log("#2 Loading Content");
    gapi.client.setApiKey(process.env.API_KEY);
    return gapi.client.load("https://language.googleapis.com/$discovery/rest?version=v1")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err) { console.error("Error loading GAPI client for API", err); });
  }
  function authenticate() {
    console.log("#1 Authenticating");
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/cloud-language https://www.googleapis.com/auth/cloud-platform" })
      .then(function () { console.log("Sign-in successful"); },
        function (err) { console.error("Error signing in", err); });
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "269683579985-3af5iq7352uj1cus9o9j4mo1e28g5peu.apps.googleusercontent.com" });  
    authenticate().then(loadClient);
});

// Create list item element from list item data


    $("#addNew").on("submit", (event) => {
      console.log("#3 Submitting");
      event.preventDefault();
      const data = $("#taskInput").val();
      function execute() {
        return gapi.client.language.documents.classifyText({
          "resource": {
            "document": {
              "content": `${escape(data)}`,
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
            return $.ajax({
              type: "POST",
              url: "/lists",
              data: JSON.stringify(response), // Stringify the response object
            });
          },
            function (err) { console.error("Execute error", err); });
      }
    });
  });
});
//

// //  validate and submit item when button is clicked
//  $(document).ready(function () {
//    const loadLists = function () {
//      $.ajax('/lists', { method: 'POST' })
//        .then(function (response) {
//          console.log(response);
//        })
//    };
//    loadLists()
//  });
//  $("form").submit(function (event) {
//    event.preventDefault();

//    let formData = {
//      text: $('#taskInput').val()
//    };

//    if (formData.text.length > 140) {
//      $('#textarea').addClass('error');
//      $('#error').remove();
//      $('#addButton').after('<p id="error">Your entry is too long!</p>');
//    }

//    if (formData.text.length === 0) {
//      $('#textarea').addClass('error');
//      $('#error').remove();
//      $('#addButton').after('<p id="error">Your entry is too short!</p>');
//    }

//    $.ajax({
//      type: "POST",
//      url: "/lists",
//      data: formData,
//    })
//      .done(() => {

//       //  $.get('/lists', function (theData) {
//       //    $('.list-container-1').prepend(createListElement(theData[theData.length - 1]));

//       //  });
//      });
//  });
