$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('body').scrollspy({ target: '#spyData' })

$(document).ready(function(){
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({scrollTop: $($(this).attr("href")).offset().top}, 400);
    });
});
