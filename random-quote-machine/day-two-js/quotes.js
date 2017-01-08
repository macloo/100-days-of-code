$(document).ready(function() {

// first test of code - OK
//  $('#get-new').on('click', function() {
//    $('#quote').text('foobar');
//    $('#attrib').text('— person');
//  });

// second test - OK
//  $('#get-new').on('click', function() {
//    $.getJSON("http://quotes.rest/qod.json", function(json) {
//        $("#quote").html(JSON.stringify(json));
//      });
//  });

/*
   See https://theysaidso.com/api/
   We can display QOD for free but random quotes require payment.
   However, there are QODs for several categories.
   That's what I'll work on next.
   Code below works for one QOD.
*/

// third test - to see the key-value pairs in console - OK
$('#get-new').on('click', function() {
	$.getJSON('http://quotes.rest/qod.json', function(json) {
    json.contents.quotes.forEach(function(val) {
			var keys = Object.keys(val);
      keys.forEach(function(key) {
        console.log(key + ": " + val[key] + "\n");
			}); // end keys.forEach
      // log one item - this works - OK
	  // [0] --- b/c there's only one item in the array sent
      console.log(json.contents.quotes[0].author);
    }); // end json.forEach
	}); // end getJSON
}); // end on click


});
