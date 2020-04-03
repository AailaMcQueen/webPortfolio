$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('body').scrollspy({ target: '#spyData' })

$(document).ready(function(){
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({scrollTop: $($(this).attr("href")).offset().top}, 400);
    });
});

$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    if($(window).width() < 990 )
        $('.navbar-collapse').collapse('hide');
});

$(window).on('load', function() { // makes sure the whole site is loaded
  $('#logocontainer').fadeOut();
  $('#loaderLG').delay(770).css({'overflow':'hidden'});
  $('#loaderLG').delay(770).css({'visibility':'hidden'});
  $('.bodyPart').delay(770).css({'overflow':'visible'});
  $('.bodyPart').delay(770).css({'visibility':'visible'});
})
