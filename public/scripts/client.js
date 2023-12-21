// Client facing scripts here


$(document).ready(function() {

  $("#toDoForm").submit(function (event) {
    event.preventDefault();
    // function classifyText() {
      const text = $("#taskInput").val();
      $.ajax({
        url: '/categorize',
        type: 'POST',
        data: {text},
      })
      .then((response) => {
        console.log(response)
        response.forEach(function(item) {
          $('#toEatList').append('<li class="list-group-item">' + item.name + '</li>');
        });
      })
    });
    // }



  // $.get('/categorize', function(response) {
  //   // Assuming data is an array of strings
  //   data.forEach(function(item) {
  //     $('#toEatList').append('<li class="list-group-item">' + item + '</li>');
  //   });
  // // });

  // }); 

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


// Function/HTML to created tweet element
  // const createTweetElement = function(tweet) {

  //   const tweetHtml = `
  // <article class="tweet">
  //   <header>
  //     <div class="user">
  //       <img src="${tweet.user.avatars}" alt="User Avatar">
  //       <span>${tweet.user.name}</span>
  //     </div>
  //     <span class="handle">${tweet.user.handle}</span>
  //   </header>
  //   <div class="content">${escape(tweet.content.text)}</div>
  //   <footer>
  //     <span class="timestamp">${timeago.format(tweet.created_at)}</span>
  //     <div class="icons">
  //       <i class="fas fa-heart"></i>
  //       <i class="fas fa-comment"></i>
  //       <i class="fas fa-share"></i>
  //     </div>
  //   </footer>
  // </article>
  // `;

  //   return tweetHtml;
  // };


  // const renderTweets = function(tweets) {
  //   $('#tweets-container').empty();
  //   for (const tweet of tweets) {

  //     // calls createTweetElement for each tweet
  //     const tweetMarkup = (tweet);
  //     // takes return value and appends it to the tweets container
  //     $('#tweets-container').prepend(tweetMarkup);
  //   }
  // };



  // const loadTweets = function() {
  //   $.ajax('/categories', { method: "GET" })
  //     .then(function(response) {
  //       renderTweets(response);
  //     });
  // };
  // loadTweets();

// This function sumbits the tweets & verifys the length of tweets

  $(function() {
    const $submit = $("taskinput");
    const $errorContainer = $('.new-tweet .error-message');
    $errorContainer.hide();
    $submit.on('click', function(event) {
      event.preventDefault();



      $.ajax('/categorize', { method: 'POST', data: $('form').serialize() })
        .then(function(indexHtml) {
          $("toDoform").val('');
          $errorContainer.hide();
          loadTweets();
        });



    });

  });

  });

