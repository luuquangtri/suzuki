$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
    });
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        enableDrag: true,
        speed: 700,
        pauseOnHover: true,
        auto: true,
        loop: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                }
            }
        ],
        //   prevHtml:["<img src='images/banner/arrowpre.png'>"],
        //   nextHtml:["<img src='images/banner/arrownext.png'>"],
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        arrows: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
    $(".aaa").mouseover(function () {
        $(".bbb").css("opacity", 0.2);
        // $(this).css("opacity", 1);
    })
    $(".aaa").mouseleave(function () {
        $(".bbb").css("opacity", 1);
    })
    $(function () {
        $('nav#menu').mmenu({
            extensions: ["position-right"]
        });
    });
    $('#menu li a').click(function () {

        //console.log("Clicked");
        $('#menu li a.active-2').removeClass('active-2');
        $(this).addClass('active-2');
    });
    // $(".poi").on('mouseenter mouseleave', function () {
    //     $(this).find('.gray-overlay').fadeToggle(500);
    // });
});