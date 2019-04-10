$(document).ready(function(){

    $( ".home__circle--2" ).click(function() {



        TweenMax.to('.about', 1.69, {
           css: {transform: 'translateX(0%)'}
         }) ;
 
 
       })


       $( ".about__btn--toHome" ).click(function() {



        TweenMax.to('.about', 1.69, {
           css: {transform: 'translateX(-100%)'}
         }) ;

       })



})