$(document).ready(function(){ 
    


 





    $( ".home__circle--4" ).click(function() {
        TweenMax.to('.form', 1.67, {css: {transform: 'translateY(0%)'}})

        if (!$(".form").hasClass("stopAnimation"))  { 
          TweenMax.from(".form__upperline--sup", .4, {opacity: "0", ease:Power0.easeNone}).delay(.5);
          TweenMax.from(".form__upperline--sup__in", .6, {width: "0", ease:Power0.easeNone}).delay(1); 
          TweenMax.from(".form__group", .8, {y: "-100%", autoAlpha: "0", ease:Power0.easeNone}).delay(1.6); 
          $('.form').addClass("stopAnimation");

        } else {
            null; 
        } 

      });

    
    $( ".form__btn--home" ).click(function() {
        TweenMax.to('.form', 1.67, {css: {transform: 'translateY(100%)'}});
      });

      


     $( ".form__item--phone" ).click(function() {

      if (!$(".form__item--phone").hasClass("actived")) {
        
        TweenMax.to(".form__item__phone", 1, {css: {transform: 'translate(17rem, 14rem)', autoAlpha: '1'}});   
        $('.form__item--phone').addClass("actived");
      }

      else {
        TweenMax.to(".form__item__phone", 1, {css: {transform: 'translate(35rem, 14rem)', autoAlpha: '0'}});  
        $('.form__item--phone').removeClass("actived");
      }

     

     }) 


})