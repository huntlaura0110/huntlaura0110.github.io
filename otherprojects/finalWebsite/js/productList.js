$(document).ready(function () {
    console.log('jQuery started');

    //hide all the movie titles initially
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

    });

});
