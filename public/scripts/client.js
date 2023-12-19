const { authenticate, loadClient, execute } = require('./google_api_helper');
const coffescript = require('coffee-script/register');
const $ = require('jquery');


// Client facing scripts here

// Authenticate API key on document load
$(document).ready(function (event) {
  const loadLists = function () {
    authenticate();
    loadClient();
  };
  // loadLists();
});


// Escape function to prevent XSS
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// validate and submit item when button is clicked
$(document).ready(function (event) {
  const loadLists = function () {
    $.ajax('/lists', { method: 'GET' })
      .then(function (lists) {
        renderLists(lists);
      })
  };
  loadLists();

  $("form").submit(function (event) {
    event.preventDefault();

    let formData = {
      text: $('#textarea').val()
    };

    if (formData.text.length > 140) {
      $('#textarea').addClass('error');
      $('#error').remove();
      $('#addButton').after('<p id="error">Your entry is too long!</p>');
    }

    if (formData.text.length === 0) {
      $('#textarea').addClass('error');
      $('#error').remove();
      $('#addButton').after('<p id="error">Your entry is too short!</p>');
    }

    $.ajax({
      type: "POST",
      url: "/lists",
      data: formData,
    })
      .done(() => {

        $.get('/lists', function (theData) {
          $('.list-container').prepend(createListElement(theData[theData.length - 1]));

        });
      })
  })
});
