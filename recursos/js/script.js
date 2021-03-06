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
    $('html,body').animate({scrollTop: 0}, 3000)//colocar animacion
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