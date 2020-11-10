/* -------Banner-----slider-----*/


$('.banner_slider').slick({
  dots:false,
  prevArrow:'.preview',
  nextArrow:'.bnext',
  autoplaySpeed:1000,
  speed:3000,
  autoplay:true,
  infinite: true,
  fade:true,
  cssEase: 'linear'
});

/* -------Venobox-----sistem-----*/

		

$(document).ready(function(){
    $navOffset=$('.position_navber').offset().top;
    
    $(window).scroll(function(){
        $scrolling=$(this).scrollTop();
        if($scrolling > $navOffset){
           $('.position_navber').addClass('nav_fixed');
        }
        else{
            $('.position_navber').removeClass('nav_fixed');
        }
    });
    
    
  $('.venobox').venobox(); 
});



/* -------image-----portfolio----slider-----*/


$('.img_por_lider').slick({
  slidesToShow:4,
  slidesToScroll:1,
  autoplay:true,
  arrows: false,
  autoplaySpeed:2000,
});


/* -------Service-----slider-----*/


 $('.slide_sevice').slick({
        slidesToShow: 3,
        slidesToScroll:2,
        dots: false,
        arrows: true,
        prevArrow: '.arrow_up',
        nextArrow: '.arrow_down',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
	  ]
    });


    
/* -------counter-----sistem-----*/


jQuery(document).ready(function($) {
     $('.statistic-counter').counterUp({
         delay: 10,
         time: 1000
    });
 });
  

/* --------tistimonial-----slider-----*/


$('.tistimonial_img_slide').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  asNavFor: '.slide_for',
  dots:false,
  arrows:true,
  prevArrow:'.arrow_ups',
  nextArrow:'.arrow_downs',
  centerMode:true,
  focusOnSelect: true,
  vertical:true,
  centerPadding:'0px',
});
		
$('.slide_for').slick({
  slidesToShow:1,
  slidesToScroll:1,
  arrows: false,
  centerPadding:'0px',
  fade: true,
  asNavFor: '.tistimonial_img_slide',
});
	


/* -------team-----slider-----*/

$('.team_slide').slick({
  slidesToShow:4,
  slidesToScroll:1,
  autoplay:true,
  arrows: false,
  autoplaySpeed:2000,
    
    
      responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow:4,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
	  ]
    
    
    
    
    
});

/* -------team-----slider-----*/


$('.company_slide').slick({
    dots:false,
    slidesToShow:5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    
});


/* -------smooth-----crol---------js------*/



    var htmlBody = $('html, body');
  

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
                return false;
            }
        }
    });



/* -------smooth-----crol---------js------*/

$('body').scrollspy({ target: '#navbarSupportedContent' })


  var windo = $(window);
	
    // this is for back to top
	
    var bc2top = $('.scroll_top');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
    windo.on('scroll', function () {

        var scrollPos = windo.scrollTop();
		
        // back to top button js
		
        if (scrollPos > 200) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
   