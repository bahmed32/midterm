// Client facing scripts here

$(document).ready(function() {
  $("classify-button").on("click", classifyText($("input").val()));
})

module.exports = {
  classifyText: classifyText,
};