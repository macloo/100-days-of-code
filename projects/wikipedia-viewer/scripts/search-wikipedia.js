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

        // set vars for writing into HTML
        var startTitle = "<h2><a href='https://en.wikipedia.org/?curid=";
        var endAtag = "' target='_blank'>";
        var endTitle = "</a></h2>";
        // <h2><a href='' target='_blank'></a></h2>

        // clear out the div for new results
        $('#search_results').html("");

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'jsonp',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function (data, textStatus, jqXHR) {
                var list = data.query.pages;
                for (var key in list) {
                    if (list.hasOwnProperty(key)) {
                        // console.log( key + ": " + list[key].title );
                        var id = key;
                        var title = list[key].title;
                        var string = startTitle + id + endAtag + title +
                            endTitle;
                        $('#search_results').append(string);
                    }
                }
            } // end success
        });

    }


}); // end document ready
