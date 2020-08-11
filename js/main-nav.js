$(document).ready(function() {
    // calculate body padding top depend on navpar height
    $('body').css("paddingTop", $("nav").innerHeight());

    // nav slide
    $("nav i").click(function() {
        $("nav ul").slideToggle();
    });

    // add activ class on navbar link
    $("nav ul li a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // calculate section padding on navpar height
    $("section").css("paddingTop", $("nav").innerHeight());
});