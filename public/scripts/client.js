// Client facing scripts here

$(document).ready(function () {

  $("#toDoForm").submit(function (event) {
    event.preventDefault();
    console.log("form submitted");
    // function classifyText() {
    const text = $("#taskInput").val();
    $.ajax({
      url: '/categorize',
      type: 'POST',
      data: { text },
    })
    .then((response) => {

      const categoryMappings = {
        'To Eat': ['/Food & Drink/'],
        'To Read': ['/Books & Literature/', '/Finance/'],
        'To Watch': ['/Arts & Entertainment/TV & Video/', '/Arts & Entertainment/Performing Arts/', '/Arts & Entertainment/Movies & TV/'],
        'To Buy': ['/Shopping/', '/Games/', '/Sports/Sporting Goods/']
      };

      function getCategory(name) {
        for (const category in categoryMappings) {
          if (name.includes(categoryMappings[category])) {
            return category;
          }
        }
      }

      // Map categories to list ids
      const listMappings = {
        'To Eat': '#toEatList',
        'To Read': '#toReadList',
        'To Watch': '#toWatchList',
        'To Buy': '#toBuyList'
      };

      response.sort((a, b) => b.confidence - a.confidence); // Sort in descending order of confidence

      const highestConfidenceItem = response[0]; // Get the item with the highest confidence

      const category = getCategory(highestConfidenceItem.name);
      if (category) {
        const listItem = $('<li class="list-group-item">' +
          '<input type="checkbox" class="form-check-input" id="itemCheckbox"> ' +
          '<label class="form-check-label" for="itemCheckbox">' + text + '</label>' +
          '<button class="move-item-button">Move</button>' +
          '<button class="delete-item-button">Delete</button>' +
          '</li>');
        $(listMappings[category]).append(listItem);
      }
      this.reset();
    });
    })
  });


// Hide profile area on page load
$(document).ready(function (event) {
  $('.profile-info').hide();

// Toggle profile when button is clicked
  $('#profileButton').click(function () {
    $('.profile-info').slideToggle();
    event.preventDefault();
  });
});

$(document).on('click', '.move-item-button', function() {
  // Move the list item to another list
});

$(document).on('click', '.delete-item-button', function() {
  // Delete the list item
  $(this).parent().remove();
});
