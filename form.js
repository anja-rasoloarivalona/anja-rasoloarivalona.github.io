$(document).ready(function(){ 

    $( ".home__circle--4" ).click(function() {

        TweenMax.to('.form', 1.67, {
          css: {transform: 'translateY(0%)'},
      
        })



      });

    
      $( ".form__btn--home" ).click(function() {

        TweenMax.to('.form', 1.67, {
          css: {transform: 'translateY(100%)'}
        });



      });


})