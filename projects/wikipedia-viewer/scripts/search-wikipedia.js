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
        // console.log(url);

        $.ajax( {
            type: 'POST',
            url: url + "&callback=?",
            // data: queryData,
            dataType: 'json',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function (data, textStatus, jqXHR) {
                for (var i=0; i < data[1].length; i++) {
                    console.log(data[1][i] + " " + data[2][i] + " " +
                    data[3][i] + "\n");
                }
            },
            error: function (errorMessage) {
            }
        } );

    }


}); // end document ready
