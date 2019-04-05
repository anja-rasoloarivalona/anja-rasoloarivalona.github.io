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
    //.to($aboutTextBg, 1 , {color: 'black'},'-=3.5')
    //.to($aboutTextBg, 1 , {opacity: .5})
    .to($projectsTextBgContainer, 1 , {autoAlpha: 1},'-=.5' )
    .to($projects, 1 , {background:'orangered'},'-=2')
    //.to($aboutTextBgContainer, 10 , {y: '-100vh'},'-=4')
    .to($projectsTextBgContainer, 1 , {opacity: .5},'+=4')
    
  
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

    /*
    var controller = new ScrollMagic.Controller(); 

    var tween = TweenMax.to($test, 1,
                         {rotationX: 45}
                     )//.to($test, 1, {autoAlpha: 0})
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '.about__logo__container',
        triggerHook: 0,
        duration: "100%",
        offset: -50
})
.setTween(tween)
.addIndicators()
.addTo(controller);
*/
 






})




