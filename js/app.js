jQuery(document).ready(function($){


/*

    1.0 Hero parallax section
    2.0 fade on scroll effect
    3.0 Testimonial Slider
    4.0 Smooth anchor scroll
    5.0 Coaches slide content

*/


    /* 1.0 Hero parallax section */
    $(window).trigger('resize').trigger('scroll');
    $('.parallax-window').parallax({
        imageSrc: 'img/header_bg_image.jpg',
        positionY: '65px',
        iosFix: true,
        androidFix: true,
        overScrollFix: true
    });
    /* End of Hero parallax section */



    /* 2.0 fade on scroll effect */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 500;
           
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);       
            }

        });     
    });
    /* End of scroll effect */


    /* 3.0 Testimonial Slider */
    $('.testimonial_slider').css('display', 'block');

   	$('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
    /* End of testimonial slider */


    /* 4.0 Smooth anchor scroll */
    $(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
    /* end of Smooth anchor scroll */


    /* 5.0 Coaches slide content */
    $('div#coaches div.large-6 a.learn_more').click(function() {

      console.log('clicked');

      var checkElement = $(this).closest("div").next('div.coaches_slideout');

      console.log(checkElement);

      if((checkElement.is('div')) && (checkElement.is(':visible'))) {
        checkElement.slideUp('normal');
      }

      if((checkElement.is('div')) && (!checkElement.is(':visible'))) {
        $('div.coaches_slideout:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }

      if (checkElement.is('div')) {
        return false;
      } else {
        return true;  
      }
    });

    $('.close_btn').click(function(){
      $('div.coaches_slideout:visible').slideUp('normal');
      return false;
    });
    /* end of Coaches slide content */

     

});/* Closes Document Ready Function */
















