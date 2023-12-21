// Client facing scripts here
const fs = require('fs');
const language = require('@google-cloud/language');



function classifyText() {
  const text = $("text-box").val();
  $.ajax({
    url: '/list',
    type: 'POST',
    data: {
      document: {
        content: text,
        type: 'PLAIN_TEXT',
      },
      classificationModelOptions: {
        v2Model: {
          contentCategoriesVersion: 'V2',
        },
      },
    },
    success: function(response) {
      const categories = response.categories;
      categories.forEach(category => {
        console.log(`Name: ${category.name}`);
        console.log(`Confidence: ${category.confidence}`);
      });
    },
    error: function(error) {
      console.log(error);
    }
  });
};

window.addEventListener('message', (event) => {
  const message = event.data;

  const newElement = document.createElement('div');
  newElement.innerHTML = message.response;

  document.body.appendChild(newElement);
});


$(document).ready(function() {
  $("classify-button").on("click", classifyText);
})

module.exports = {
  classifyText: classifyText,
};