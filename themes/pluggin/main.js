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
    var swiper2 = new Swiper('.sub-tab-slider-2', {
        slidesPerView: 4,
        spaceBetween: 0,
        // init: false,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
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
    $('.galary-mb-mb').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // autoplay:true,
        responsive: {
            0: {
                items: 2
            },
            
            600: {
                items: 3
            },
            1000: {
                items: 5
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
    $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
            $('.navi').addClass('fixed-2');
        } else {
            $('.navi').removeClass('fixed-2');
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 270) {
            $('.navi-2').addClass('fixed-2');
        } else {
            $('.navi-2').removeClass('fixed-2');
        }
    })
    $(".toggle-next ").click(function () {
        event.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });
    $(".menu-toggle").click(function(){
        $(".menu-mb-navi").toggle();
    });
    $(".menu-mb-navi li a").click(function () {
        $(".menu-mb-navi").addClass('.close-item');
        $(".menu-mb-navi").toggle();
    });
      
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
    // $(".menu-toggle").click(function () {
    //     // $('menu-mb-navi').removeClass('show');
    //     $('menu-mb-navi').addClass('show');
    // });
    // $(".poi").on('mouseenter mouseleave', function () {
    //     $(this).find('.gray-overlay').fadeToggle(500);
    // });
});