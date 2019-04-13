$(document).ready(function(){


    var $homeCircle1 = $('.home__circle--1')
    var $homeCircle2 = $('.home__circle--2')
    var $homeCircle3 = $('.home__circle--3')
    var $homeCircle4 = $('.home__circle--4')
    var $homeCircleMain = $('.home__main')

    TweenMax.to($('.home__welcome'), 6, {rotation:"360", ease:Linear.easeNone, repeat:-1});

    TweenMax.to($('.home__welcome'), 2, {scale:"1.2", ease:Linear.easeNone, repeat:-1}).yoyo(true);

    var first = new TimelineLite();

    first.set($homeCircleMain, {autoAlpha: 0 ,scale: 0})
    .set($homeCircle1, {autoAlpha: 0, scale:0})
    .set($homeCircle2, {autoAlpha: 0, scale:0})
    .set($homeCircle3, {autoAlpha: 0, scale:0})
    .set($homeCircle4, {autoAlpha: 0, scale:0})

    .set(".upperline",{autoAlpha: 0})
    .set(".home__upperline--1__in",{autoAlpha: 0})
    .set(".home__upperline--2__in",{autoAlpha: 0})
    .set(".home__upperline--3__in",{autoAlpha: 0})
    .set(".home__upperline--4__in",{autoAlpha: 0})

    $( ".home__welcome" ).click(function() { 

      TweenMax.to($('.home__welcome'), 2, {autoAlpha:"0", scale: "0", ease:Linear.easeNone});

      var t1 = new TimelineLite();
  
      t1  
        
        .to($homeCircleMain, 1, {autoAlpha: 1, scale: 1}, '+=1.6')
        .to($homeCircle1, 1, {autoAlpha: 1, scale: 1},'+=.9')
        .to($homeCircle2, 1, {autoAlpha: 1, scale: 1},'-=1.2')
        .to($homeCircle3, 1, {autoAlpha: 1, scale: 1}, '-=1.2')
        .to($homeCircle4, 1, {autoAlpha: 1, scale: 1},'-=1.2')
  
      TweenMax.to(".upperline", 2, {autoAlpha: 1, ease:Power0.easeNone}).delay(1.5); 
      TweenMax.to(".home__upperline--1__in", 2, {autoAlpha: 1, width: "100%", ease:Power0.easeNone}).delay(1.7);
      TweenMax.to(".home__upperline--2__in", 2, {autoAlpha: 1, width: "100%", ease:Power0.easeNone}).delay(1.7);
      TweenMax.to(".home__upperline--3__in", 2, {autoAlpha: 1, width: "100%", ease:Power0.easeNone}).delay(1.7);
      TweenMax.to(".home__upperline--4__in", 2, {autoAlpha: 1, width: "100%", ease:Power0.easeNone}).delay(1.7); 
  


    })


    //FIRST SCENE FIRED AT THE BEGINING 

   
    

        //CIRCLE 1 HOVER
        $(".home__circle--1").mouseover(function(){
          TweenMax.to(".home__circle--1__layer", .4, {opacity: "1", ease:Power0.easeNone})
          TweenMax.to(".home__circle--1", .4, {border: "0px", ease:Power0.easeNone}).delay(-.5)
        });

        $(".home__circle--1").mouseleave(function(){
          TweenMax.to(".home__circle--1__layer", .4, {opacity: "0", ease:Power0.easeNone})
          TweenMax.to(".home__circle--1", .4, {border: "3px solid #2187e7", ease:Power0.easeNone}).delay(-.6)
        });

        //CIRCLE 2 HOVER
        $(".home__circle--2").mouseover(function(){
          TweenMax.to(".home__circle--2__layer", .4, {opacity: "1", ease:Power0.easeNone})
          TweenMax.to(".home__circle--2", .4, {border: "0px", ease:Power0.easeNone}).delay(-.5)
        });

        $(".home__circle--2").mouseleave(function(){
          TweenMax.to(".home__circle--2__layer", .4, {opacity: "0", ease:Power0.easeNone})
          TweenMax.to(".home__circle--2", .4, {border: "3px solid #2187e7", ease:Power0.easeNone}).delay(-.6)
        });

        //CIRCLE 3 HOVER
        $(".home__circle--3").mouseover(function(){
          TweenMax.to(".home__circle--3__layer", .4, {opacity: "1", ease:Power0.easeNone})
          TweenMax.to(".home__circle--3", .4, {border: "0px", ease:Power0.easeNone}).delay(-.5)
        });

        $(".home__circle--3").mouseleave(function(){
          TweenMax.to(".home__circle--3__layer", .4, {opacity: "0", ease:Power0.easeNone})
          TweenMax.to(".home__circle--3", .4, {border: "3px solid #2187e7", ease:Power0.easeNone}).delay(-.6)
        });

        //CIRCLE 4 HOVER
        $(".home__circle--4").mouseover(function(){
          TweenMax.to(".home__circle--4__layer", .4, {opacity: "1", ease:Power0.easeNone})
          TweenMax.to(".home__circle--4", .4, {border: "0px", ease:Power0.easeNone}).delay(-.5)
        });

        $(".home__circle--4").mouseleave(function(){
          TweenMax.to(".home__circle--4__layer", .4, {opacity: "0", ease:Power0.easeNone})
          TweenMax.to(".home__circle--4", .4, {border: "3px solid #2187e7", ease:Power0.easeNone}).delay(-.6)
        });








  });




