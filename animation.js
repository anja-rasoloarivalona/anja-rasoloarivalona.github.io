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
      .set($about, {y: '95%'})
      .set($sidebar,{y: '95%'})
      .set($sidebarIcon, {autoAlpha: 0})
      .set($aboutTextBg, {autoAlpha: 0})

      .to($about, 1, {y: '0%'})
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

   .to($html, 2, {width: '90%'})
   .to($css,2, {width: '88%'},'-=1.5')
   .to($es6,2, {width: '75%'},'-=2')
   .to($react,2, {width: '50%'},'-=2')
   .to($jquery,2, {width: '85%'},'-=2')
   .to($boot, 2,{width: '65%'},'-=2')
   .to($git,2, {width: '90%'},'-=2')
   
  

    

    var controller = new ScrollMagic.Controller(); 

     var scene = new ScrollMagic.Scene({
        triggerElement: '.skills__bar--html',
        triggerHook: 0.5,
        
        
    })
    .setTween(t3)
    .addIndicators()
    .addTo(controller) ;



   /* $('#email-submit').click(function(e) {

       e.preventDefault();
       console.log('clicked')

       var email = $('#email').val();
       var name = $('#name').val();
       var message =$('#message').val();
 
       if(email.length > 5 && email.includes('@') && email.includes('.')) {
          console.log('OK NICE')
       }
       */
      


     
    })
  







