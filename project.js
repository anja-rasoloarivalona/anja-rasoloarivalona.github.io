$(document).ready(function(){ 


      $( ".projects__btn--toHome" ).click(function() {



       TweenMax.to('.home', 1.69, {
          css: {transform: 'translateY(0%)'}
        }) ;

        TweenMax.to('.container__layer', 1.7, {
          css: {transform: 'translateY(0%)'}
        })

      })
      

        

        var $projectsCircle1 = $('.projects__circle--1')
        var $projectsCircle2 = $('.projects__circle--2')
        var $projectsCircle3 = $('.projects__circle--3')
        var $projectsCircle4 = $('.projects__circle--4')
        var $projectbtn = $('.projects__btn--toHome')

        

    /*    $( ".home__circle--1" ).click(function()         { 
            
            TweenMax.to('.home', 1.5, {
              css: { transform: 'translateY(100%)'}
            })
            TweenMax.to('.container__layer', 1.3, {
              css: { transform: 'translateY(100%)'}
            })  

            if (!$(".container__layer").hasClass("stopAnimation"))  { */
               


        var t2 = new TimelineLite();
  
        t2 
      .set($projectsCircle1, {autoAlpha: 0 ,scale: 0})
      .set($projectsCircle2, {autoAlpha: 0, scale:0})
      .set($projectsCircle3, {autoAlpha: 0, scale:0})
      .set($projectsCircle4, {autoAlpha: 0, scale:0})
      .set($projectbtn, {autoAlpha: 0, scale:0})
      

      .to($projectbtn, 1, {autoAlpha: 1, scale: 1}, '+=1.4')
      .to($projectsCircle1, 1, {autoAlpha: 1, scale: 1},'-=.2')
      .to($projectsCircle2, 1, {autoAlpha: 1, scale: 1},'+=.8')
      .to($projectsCircle3, 1, {autoAlpha: 1, scale: 1},'-=1.2')
      .to($projectsCircle4, 1, {autoAlpha: 1, scale: 1},'-=1')
      

      TweenMax.from(".projects__upperline--fromHome", 2, {opacity: "0", ease:Power0.easeNone}).delay(.2);
      TweenMax.from(".projects__upperline--1", .4, {opacity: "0", ease:Power0.easeNone}).delay(3);
      TweenMax.from(".projects__upperline--2", 1, {opacity: "0", ease:Power0.easeNone}).delay(3.4);
      TweenMax.from(".projects__upperline--3", 1, {opacity: "0", ease:Power0.easeNone}).delay(1.4);
      TweenMax.from(".projects__upperline--4", 1, {opacity: "0", ease:Power0.easeNone}).delay(3.5);
    
      
    TweenMax.from(".projects__upperline--fromHome__in", .8, {width: "0", ease:Power0.easeNone}).delay(.6); 
    TweenMax.from(".projects__upperline--1__in", .6, {width: "0", ease:Power0.easeNone}).delay(3.4); 
    TweenMax.from(".projects__upperline--2__in", .6, {width: "0px", ease:Power0.easeNone}).delay(3.5);
    TweenMax.from(".projects__upperline--3__in", .6, {width: "0px", ease:Power0.easeNone}).delay(1.8);
    TweenMax.from(".projects__upperline--4__in", .6, {width: "0px", ease:Power0.easeNone}).delay(3.5);
    TweenMax.from(".projects__layer", .6, {opacity: "0", ease:Power0.easeNone}).delay(4.5);
  

 /*   $('.container__layer').addClass("stopAnimation");

    } else {
        null; 
    } */
      


   


});