console.log('instaparser.js loaded')
var api_key = 'api_key=c6eaaf5f735c4dfc9b96d3bc7fbf104c'

$(document).ready(function () {
  $.getJSON({
    url: 'https://www.instaparser.com/api/1/text' + '?' + api_key + '&url=' + 'http://edition.cnn.com/2016/07/18/politics/mike-pence-mothers-day-care/index.html',
    success: function (result) {
      $('.title').append(result.title);
    }
  });
})
