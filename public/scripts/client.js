// Client facing scripts here
const fs = require('fs');
const language = require('@google-cloud/language');


$("toDoform").submit(function (event) {
  event.preventDefault();
  function classifyText() {
    const text = $("taskinput").val();
    $.ajax({
      url: '/categorize',
      type: 'GET',
      data: text,
    })
  }
  console.log(data);
});


module.exports = {
  classifyText: classifyText,
};