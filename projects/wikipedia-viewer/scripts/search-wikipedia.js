$(document).ready(function() {

    // listen for submit event
    $('#search-form').submit(function(e) {
        e.preventDefault();
        search();
    });

    function search() {
        // get text from input field
        var q = $('#query').val();
        // clear input field
        $('#query').val("");
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        q;
        console.log(url);

        /* $.ajax( {
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
            // data: queryData,
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
    }


}); // end document ready
