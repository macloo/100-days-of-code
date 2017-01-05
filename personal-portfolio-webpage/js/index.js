/*  jQuery and bootstrap.js enabled  */

// resize the "about" div to match proportions of image 
// it works for images with a 16:9 aspect ratio 
function resizeDiv() {
  var viewerWidth = $( '#about' ).width();
  if (viewerWidth > 450) {
    $( '#about' ).height( viewerWidth * 0.5625 );
  } else {
    $( '#about' ).css( { 'height': (  $(window).height() )  } );
    $( '#about' ).css( 'text-align', 'right' );
  }
}

resizeDiv();
positionText();

// this adjusts the height of the "viewer" div dynamically as the user
// resizes the browser window
$( window ).resize(function() {
	resizeDiv()
  positionText();
});

// adjust text position based on height of div
function positionText() {
  var viewerHeight = $( '#about' ).height();
  $( '#intro' ).css( 'padding-top', viewerHeight/3 );
}