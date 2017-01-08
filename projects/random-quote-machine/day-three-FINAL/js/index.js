$(document).ready(function() {
  
var cats = ["inspire", "management", "sports", "life", "funny", "love", "art", "students"];
  
 var theQuote = "You didn't get a quote yet.";
 var theAuthor = "";
 
$('#get-new').on('click', function() {
  // get a category randomly 
  var i = Math.floor(Math.random() * cats.length);
  var url = 'http://quotes.rest/qod.json?category=' + cats[i];
  // extract values from JSON returned by the API 
	$.getJSON(url, function(json) {
      theQuote = json.contents.quotes[0].quote;
      theAuthor = json.contents.quotes[0].author;
      $('#quote').text(theQuote);
      $('#attrib').text('— ' + theAuthor);
	}); // end getJSON
}); // end on click

// handle the Tweet button and its contents 
$('#twitter-share').on('click', function() {
    var theLink = 'https://twitter.com/intent/tweet?hashtags=quotable&text=' + encodeURIComponent('"' + theQuote + '" ' + '— ' + theAuthor);
    $(this).attr('href', theLink);
}); // end on click


}); // end document ready