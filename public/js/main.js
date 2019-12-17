

//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.logo').toggleClass('change-img');
        $('.main-nav').toggleClass('open');
        $('.header').toggleClass('bg');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

//slider for "reviews"

$('.reviews-slider').slick({
    dots: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                centerPadding: '0',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                dots: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        },
    ]
});

//scroll

$('.nav-link-new').mPageScroll2id();

//video popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

