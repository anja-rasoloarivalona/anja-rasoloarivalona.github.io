$(document).ready(function(){ 



        $( ".home__circle--1" ).click(function() { 
        TweenMax.to('.home', 1.4, {
          css: { transform: 'translateY(100%)'}
        })
        TweenMax.to('.container__layer', 1.2, {
          css: { transform: 'translateY(100%)'}
        })   
      });


      $( ".projects__btn--toHome" ).click(function() {
        TweenMax.to('.home', 1.7, {
          css: {transform: 'translateY(0%)'}
        }) 
        TweenMax.to('.container__layer', 1.7, {
          css: {transform: 'translateY(0%)'}
        })
      });

        var $projectsCircle1 = $('.projects__circle--1')
        var $projectsCircle2 = $('.projects__circle--2')
        var $projectsCircle3 = $('.projects__circle--3')
        var $projectsCircle4 = $('.projects__circle--4')
        var $projectbtn = $('.projects__btn--toHome')

        var proUpline1 = $('.projects__upperline--1')
        var proUpline1IN = $('.projects__upperline--1__in')

        var proUpline2 = $('.projects__upperline--2')
        var proUpline2IN = $('.projects__upperline--2__in')

        var proUpline3 = $('.projects__upperline--3')
        var proUpline3IN = $('.projects__upperline--3__in')

        var proUpline4 = $('.projects__upperline--4')
        var proUpline4IN = $('.projects__upperline--4__in')

        var proUpline5 = $('.projects__upperline--5')
        var proUpline5IN = $('.projects__upperline--5__in')


      var t2 = new TimelineLite();
  
    t1  
      .set($projectsCircle1, {autoAlpha: 0 ,scale: 0})
      .set($projectsCircle2, {autoAlpha: 0, scale:0})
      .set($projectsCircle3, {autoAlpha: 0, scale:0})
      .set($projectsCircle4, {autoAlpha: 0, scale:0})
      .set($projectbtn, {autoAlpha: 0, scale:0})

      .set($homeToProject, {autoAlpha: 0, scale:0})


      .to($projectbtn, 1, {autoAlpha: 1, scale: 1},'-=1')
      .to($projectsCircle1, 1, {autoAlpha: 1, scale: 1}, '+=.5')
      .to($projectsCircle2, 1, {autoAlpha: 1, scale: 1},'+=1.6')
      .to($projectsCircle3, 1, {autoAlpha: 1, scale: 1},'-=1')
      .to($projectsCircle4, 1, {autoAlpha: 1, scale: 1}, '-=1');


      TweenMax.from(".projects__upperline--1", 2, {opacity: "0", ease:Power0.easeNone});
      TweenMax.from(".projects__upperline--2", 2, {opacity: "0", ease:Power0.easeNone});
      TweenMax.from(".projects__upperline--3", 2, {opacity: "0", ease:Power0.easeNone});
      TweenMax.from(".projects__upperline--4", 2, {opacity: "0", ease:Power0.easeNone});
      TweenMax.from(".projects__upperline--5", 2, {opacity: "0", ease:Power0.easeNone});
      

    TweenMax.from(".upperline", 2, {opacity: "0", ease:Power0.easeNone}).delay(1); 
    TweenMax.from(".home__upperline--1__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--2__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--3__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--4__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2); 
})