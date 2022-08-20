$(function () {
    // typed js start

    //banner part start
    $(".typed-text").typed({
        strings: ["GAmING EXPeRIENCE"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    //about part start
    $(".typed2-text").typed({
        strings: ["ABOUT THE BIGGEST HANCOK COMMUNITY"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    //about part 2 start
    $(".typed3-text").typed({
        strings: ["MOST POPULAR GAMING PLATFORM."],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    //video part start
    $(".typed4-text").typed({
        strings: ["LIVE STREAMIN VIDEO BY HANCOK"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    //pricing part start
    $(".typed5-text").typed({
        strings: ["Choose Your Favourite Game"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    //store part start
    $(".typed6-text").typed({
        strings: ["WE PROVIDE ALL GAMING ACCESORIES"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });

    //store part start
    $(".typed7-text").typed({
        strings: ["FREQUENTLY ASKED QUESTION AND ANSWER"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    });
    // typed js end

    // wow js start
    new WOW().init();
    // wow js end


    // carousel js start
    Carousel.init($("#carousel"));
    $("#carousel").init();
    // carousel js end


    // counter up start
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    // counter up end

    // venobox start
    new VenoBox({
    selector: '.video-links',
});
    // venobox end


    // popular slider end
    $('.popular-slide-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:'.popular-previous',
        nextArrow:'.popular-next',
      });
    // popular slider end

    // video slider start
    $('.video-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
        centerMode: true,
        centerPadding: '0',
      });
    // video slider end

    // pricing slider start
    $('.pricing-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    // pricing slider end


    // store slider start
    $('.store-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:'.store-previous',
        nextArrow:'.store-next',
    });
    // store slider end


});