$(document).ready(function() {

    function search() {
        var q = $('#query').val();
        console.log(q);
        // clear input field
        $('#query').val("");
    }

    // listen for submit event
    $('#search-form').submit(function(e) {
        e.preventDefault();
        search();
    });

    /*
    $.ajax( {
        url: "https://en.wikipedia.org/w/api.php",
        data: queryData,
        dataType: 'json',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function (errorMessage) {
        }
    } );
    */


}); // end document ready
