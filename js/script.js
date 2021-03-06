/* Please ❤ this if you like it! */
// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
});

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 1750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);


  /* Video Popup*/

  $(document).ready(function(){
	const videoSrc = $("#player-1").attr("src");
	$(".video-play-btn, .video-popup").on("click" , function(){
		if($(".video-popup").hasClass("open")){
			$(".video-popup").removeClass("open");
			$("#player-1").attr("src" , "");
		}
		else{
			$(".video-popup").addClass("open");
			if($("#player-1").attr("src")==''){
				$("#player-1").attr("src" , videoSrc);
			}
		}
	});
  });


  $(document).ready(function(){
  $('.features-carousel').owlCarousel({
    loop:true,
	margin:0,
	autoplay: true,
	/*Aqui cambiamos el tiemppo*/
	autoplayTimeout: 2700,
	autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
   })
  });

  $(document).ready(function(){
	$('.team-carousel').owlCarousel({
	  loop:true,
	  margin:0,
	  autoplay: true,
	  /*Aqui cambiamos el tiemppo*/
	  autoplayTimeout: 3700,
	  autoplayHoverPause: true,
	  responsiveClass:true,
	  responsive:{
		  0:{
			  items:1,
		  },
		  600:{
			  items:2,
		  },
		  1000:{
			  items:3,
		  }
	  }
	 })
	});

	/*---------- Testimonial carousel -----------*/

	$(document).ready(function(){
		$('.testimonials-carousel').owlCarousel({
		  loop:true,
		  margin:0,
		  autoplay: true,
		  /*Aqui cambiamos el tiemppo*/
		  autoplayTimeout: 3700,
		  autoplayHoverPause: true,
		  responsiveClass:true,
		  responsive:{
			  0:{
				  items:1,
			  },
			  600:{
				  items:2,
			  },
			  1000:{
				  items:3,
			  }
		  }
		 })
		});


	//Top scroll

$(document).ready(function(){
    // muestra el scroll oculto
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
        $('.scrollTopTop').fadeIn();
    } else {
        $('.scrollTopTop').fadeOut();

    }
});
//smooth scrolling to top
$('.scrollTopTop').click(function(){
    $('html,body').animate({scrollTop: 0}, 2000)//colocar animacion
})
});

/*AOS Library*/

$(document).ready(function(){
AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
  });
});


//Galeria de proyectos agregado 3 de marzo

var fullImg = document.querySelector(".full-img");
var miniImg = document.querySelectorAll(".mini-img");

function changeImg(x) {

    var targetImg = miniImg[x - 1];
    var imgAttr = targetImg.getAttribute("src");

    fullImg.setAttribute("src", imgAttr);

}






