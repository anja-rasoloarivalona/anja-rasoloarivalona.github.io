$(document).ready(function(){

  
    /* LAYOUT */
    var $projects = $('.projects');
    var $home = $('.home');

    var $homeLine1 = $('.home__upperline--1 ')
    var $homeLine2 = $('.home__upperline--2 ')
    var $homeLine3 = $('.home__upperline--3 ')
    var $homeLine4 = $('.home__upperline--4 ')
    var $homeToProject = $('.home__upperline--toProjects')

    var $homeCircle1 = $('.home__circle--1')
    var $homeCircle2 = $('.home__circle--2')
    var $homeCircle3 = $('.home__circle--3')
    var $homeCircle4 = $('.home__circle--4')
    var $homeCircleMain = $('.home__main')


    

  
    


    //FIRST SCENE FIRED AT THE BEGINING 

    var t1 = new TimelineLite();
  
    t1  
      .set($homeCircleMain, {autoAlpha: 0 ,scale: 0})
      .set($homeCircle1, {autoAlpha: 0, scale:0})
      .set($homeCircle2, {autoAlpha: 0, scale:0})
      .set($homeCircle3, {autoAlpha: 0, scale:0})
      .set($homeCircle4, {autoAlpha: 0, scale:0})

   



      .to($homeCircleMain, 1, {autoAlpha: 1, scale: 1}, '+=.5')
      .to($homeCircle1, 1, {autoAlpha: 1, scale: 1},'+=1.6')
      .to($homeCircle2, 1, {autoAlpha: 1, scale: 1},'-=1')
      .to($homeCircle3, 1, {autoAlpha: 1, scale: 1}, '-=1')
      .to($homeCircle4, 1, {autoAlpha: 1, scale: 1},'-=1')

    TweenMax.from(".upperline", 2, {opacity: "0", ease:Power0.easeNone}).delay(1); 
    TweenMax.from(".home__upperline--1__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--2__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--3__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2);
    TweenMax.from(".home__upperline--4__in", 2, {width: "0px", ease:Power0.easeNone}).delay(1.2); 

 
      


    /* SECOND SCENE 

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


    /* THIRD SCENE 

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




  


  



  


  });




