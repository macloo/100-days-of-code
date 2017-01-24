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
        // api query
        var url =  "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=" +
        q;

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'jsonp',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function (data, textStatus, jqXHR) {
                var list = data.query.pages;
                for (var key in list) {
                    if (list.hasOwnProperty(key)) {
                        console.log( key + ": " + list[key].title );
                    }
                }
            } // end success
        });

    }


}); // end document ready
