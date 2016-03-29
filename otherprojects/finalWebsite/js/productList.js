//wait until the page has loaded before doing anything
$(document).ready(function () {
    console.log('jQuery started');

    // create a div for the overlay
    var overlay = $('<div id="overlay"></div>')
    $( 'body' ).append ( overlay );
    overlay.hide();
    overlay.click(function(){
        overlay.animate({
            opacity:0
        },{
            duration: 333 ,
         queue: false,
            complete : function(){
                overlay.hide();
        }
        });

        $( 'article.open').removeClass( 'open' );
        $ ( '#youtube' ).hide();
        $ ( '#youtbe' ).attr( 'src', 'about:blank');
    });



    //hide all the movie titles initially

    // make a duplicated of each movies haeading annd place it to the extended info box
    $( '.movie' ).each(function(){
         var h3Copy = $( this ).find ('h3').clone();
        //put at thebeigning of extended info box
        $ ( this ).find (' .extended-info').prepend( h3Copy);
    });
      $( '.basic-info h3' ).hide();

    //rolling over poster images
      $('.basic-info img').hover(function(){
          //code that happens when mouse is over poster

          /*target the h3 that is the tag
          previous to the img tag of the poster
          and show it */
          $(this).prev().show();
          //move the heading up out of view
          $(this).prev().css('top', -200);
          /*slide he heading down
          and do it with an animation */
          $(this).prev().animate({
              top: 0,
              opacity: 1
          }, {
              queue: false,
              duration: 500
          } );

      }, function (){
          // code that happens when mouse leaves the poster

          /* target the h3 that is the tag
          previous to the ima tag of the poster
          and animate it away*/

          $(this).prev().animate({
              top: 450,
              opacity: 0
          }, {
              queue: false, /* prevent queueing of animation */
              duration: 300, /* how long it takes in ms */
              complete: function () {
                  /* when the animation xompletes,
                  hide the heading being animated */
                  $(this).hide();
              }
          });

      });

    $('.basic-info img').click(function(){
        $(this).parent().parent().addClass('open');
        overlay.show();
           overlay.animate({
            opacity:1
        },{
            duration: 333 ,
            queue: false

        });

    });

    $( '.extended-info a' ).click (function( e){
        // disable the hyperlink
        e.preventDefault();
        // reveals youtube player
        $( '#youtube' ).show();
        //hides the currently open extended info box
        $ ( 'article.open').removeClass ( 'open' );
        // read
        var url= $( this ).attr('href');
        var videoCode = url.split ('=').pop();
        var embedURL = 'https://www.youtube.com/embed/' +videoCode;
        $( '#youtube' ).attr ('src', embedURL);

    });

});
