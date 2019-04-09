$(document).ready(function(){ 

    $( '.home__circle--3' ).click(function() {

        TweenMax.to('.skills', 1.69, {
          css: {transform: 'translateX(0%)'}
        }) ;

   
      });
})