// Client facing scripts here

// validate and submit item when button is clicked
$(document).ready(function (event) {
  const loadLists = function () {
    $.ajax('/Lists', { method: 'GET' })
      .then(function (tweets) {
        renderTweets(tweets);
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