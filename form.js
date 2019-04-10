$(document).ready(function(){ 

    $( ".home__circle--2 circle" ).click(function() {

        TweenMax.to('.form', 1.69, {
          css: {transform: 'translateY(0%)'}
        }) ;

      });

    
      $( ".form__btn--toHome" ).click(function() {

        TweenMax.to('.form', 1.69, {
          css: {transform: 'translateY(100%)'}
        }) ;

      });


})