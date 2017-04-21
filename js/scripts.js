$("body").on("click", "nav a", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 500);
    return false;
});
$(".menu-icon").click(function(){
        $(this).parent().children("nav").toggle();
});