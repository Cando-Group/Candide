(function ($) {
 "use strict";

/* Mobile Menu
---------------------------- */ 
 $(document).ready(function () {
     $("#respMenu").aceResponsiveMenu({
         resizeWidth: '766', // Set the same in Media query
         animationSpeed: 'fast', //slow, medium, fast
         accoridonExpAll: false //Expands all the accordion menu on click
     });
 });

/* Sticky Menu
---------------------------- */ 
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function(){
    var scroll = wind.scrollTop();
    if (scroll < 60) {
        sticky.removeClass('sticky-menu');
    }else{
        $('#sticky-header').addClass('sticky-menu');
    }
});

/* Testimonial
-----------------------*/
$('.testimonial-active').owlCarousel({
    // rtl:true,
    loop:true,
    dots:true,
    nav:false,
    dots: true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right"></i>'],
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplay:true,
    mouseDrag: false,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
});

/* Video
-----------------------*/
$(function(){
    $("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'white',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 60
        }
    });
    $("#video2").videoPopup();
});

/* tooltip
-----------------------*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* scrollToTop
---------------------------- */ 
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.scrollToTop').fadeIn();
    }else{
        $('.scrollToTop').fadeOut();
    }
});
$('.scrollToTop').click(function(){
    $('html,body').animate({scrollTop: 0}, 1000)
});
})(jQuery); 

