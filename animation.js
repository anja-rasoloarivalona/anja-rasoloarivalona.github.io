$(document).ready(function(){

  
    /* LAYOUT */
    var $projects = $('.projects');
    var $about = $('.about');
    
    var $sidebar = $('.sidebar');
    var $sidebarIcon= $('.media__icon');

    /* CUSTOM */
    var $aboutTextBgContainer = $('.about__text-bg');
    var $aboutTextBg = $('.about__text__bg');

    var $projectsTextBgContainer= $('.projects__text-bg');
    var $projectsTextBg = $('.projects__text__bg');

    var $slide = $('.swiper-slide');
    

    $('.smooth-goto').on('click', function() {  
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
      return false;
  });

  
   

    /* FIRST SCENE FIRED AT THE BEGINING */

    var t1 = new TimelineLite();
  
    t1
      .set($about, {y: '60%'})
      .set($sidebar,{y: '60%'})
      .set($sidebarIcon, {autoAlpha: 0})
      .set($aboutTextBg, {autoAlpha: 0})

      .to($about, 1,{y: '0%'})
      .to($sidebar, 1,{y: '0%'}, '-=1')
      .to($sidebarIcon,1, {autoAlpha: 1})
      .to($aboutTextBg,1, {autoAlpha: 1},'-=1')


    /* SECOND SCENE */

    var t2 = new TimelineLite();
    t2
    .to($aboutTextBgContainer, 2 , {y:'0px'},'-=7')
    .to($about, 12, {rotationX: 15}, '-=12')
    .to($about, 3, {autoAlpha: 0}, '-=4')
    .to($projects, 7, {y: '15%'})
    .to($slide, 4, {background:'rgb(235, 227, 227)'},'-=5')  
    .to($projectsTextBgContainer, 3 , {autoAlpha: 1},'-=5' )
    .to($projects, 8 , {background: 'rgb(235, 227, 227)'},'-=5')
    .to($projectsTextBgContainer, 2 , {opacity: .5},'-=4')
    ;

     var controller = new ScrollMagic.Controller(); 

     var scene = new ScrollMagic.Scene({
        triggerElement: '.about__logo__container',
        triggerHook: 0,
        duration: "600",
        
    })
    .setTween(t2)
    .addIndicators()
    .addTo(controller);


    /* THIRD SCENE */

    var $projectwrap = $('.project__wrapper'); //each wrap of project
    var $wrap1 = $('.project__wrapper--1');
    var $wrap2 = $('.project__wrapper--2');
    var $wrap3 = $('.project__wrapper--3');
    var $projectImg = $('.project__img')
    
/*
    var t3 = new TimelineLite();
    t3
    .to($wrap1, 3, {x: '15%'})
    .to($wrap2, 3, {x: '-10%'},'-=2')
    .to($wrap3, 2, {x: '5%'},'-=3')
  


    

    var controller = new ScrollMagic.Controller(); 

     var scene = new ScrollMagic.Scene({
        triggerElement: '.projects__text-bg',
        triggerHook: 0.5,
        offset: -150,
        reverse: 0
     
        
    })
    .setTween(t3)
    .addIndicators()
    .addTo(controller) */
   


})




