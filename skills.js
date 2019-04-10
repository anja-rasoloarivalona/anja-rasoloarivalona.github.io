$(document).ready(function(){ 

    $( '.home__circle--3' ).click(function() {

        TweenMax.to('.skills', 1.69, {
          css: {transform: 'translateX(0%)'}
        }) ;

        if (!$(".skills").hasClass("stopAnimation"))  {

        var $html = $('.skills__bar--html');
        var $css = $('.skills__bar--css');
        var $boot = $('.skills__bar--bootstrap');
        var $es6 = $('.skills__bar--es6');
        var $jquery = $('.skills__bar--jquery');
        var $react = $('.skills__bar--react');
        var $git = $('.skills__bar--git');
        
    
        var t3 = new TimelineLite();
        t3
       .set($html, {width: '0%'})
       .set($css, {width: '0%'})
       .set($boot, {width: '0%'})
       .set($es6, {width: '0%'})
       .set($jquery, {width: '0%'})
       .set($react, {width: '0%'})
       .set($git, {width: '0%'})
    
       .to($html, 1.5, {width: '90%'},'+=2.9')
       .to($css,1.5, {width: '88%'},'-=.5')
       .to($es6,1.5, {width: '75%'},'-=1.5')
       .to($react,1.5, {width: '50%'},'-=1.3')
       .to($jquery,1.5, {width: '85%'},'-=2.5')
       .to($boot,1.5,{width: '65%'},'-=2.5')
       .to($git,1.5, {width: '90%'},'-=2.7')
    
       TweenMax.from(".skills__upperline--1", 1, {opacity: "0", ease:Power0.easeNone})
        TweenMax.from(".skills__upperline--2", 1, {opacity: "0", ease:Power0.easeNone}).delay(1)
    
        TweenMax.from(".skills__upperline--1__in", 1, {width: "0px", ease:Power0.easeNone}).delay(1)
        TweenMax.from(".skills__upperline--2__in", 1 , {width: "0px", ease:Power0.easeNone}).delay(2)


        $('.skills').addClass("stopAnimation");

        } else {
        null;
        }




      });

   


   

   
    $('.skills__btn--toHome').click(function() {
        TweenMax.to('.skills', 1.69, {
            css: {transform: 'translateX(100%)'}
          }) ;

    });



})