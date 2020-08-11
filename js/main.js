$(document).ready(function() {
    // calculate body padding top depend on navpar height
    $('body').css("paddingTop", $("nav").innerHeight());

    // nav slide
    $("nav i").click(function() {
        $("nav ul").slideToggle();
    });

    // navbar function
    $("nav li a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 1000);
    });

    // add activ class on navbar link
    $("nav ul li a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // calculate section padding on navpar height
    $("section").css("paddingTop", $("nav").innerHeight());


    // create owl carousel
    $(".services-carousel-1").owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            650: {
                items: 2
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
    $(".services-carousel-2").owlCarousel({
        loop: true,
        rtl: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            650: {
                items: 2,
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });
});