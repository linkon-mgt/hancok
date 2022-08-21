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
        arrows: true,
        prevArrow: '.popular-previous',
        nextArrow: '.popular-next',
    });
    // popular slider end

    // video slider start
    $('.video-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              autoplay: true,
            }
          },
        ]
    });
    // video slider end

    // pricing slider start
    $('.pricing-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              autoplay: true,
            }
          },
        ]
    });
    // pricing slider end


    // store slider start
    $('.store-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.store-previous',
        nextArrow: '.store-next',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              autoplay: true,
            }
          },
        ]
    });
    // store slider end


    //sticky menu start
    $(window).scroll(function () {
        var sticky = $(this).scrollTop()
        if (sticky > 50) {
            $(".navbar").addClass("sticky-menu")
        } else {
            $(".navbar").removeClass("sticky-menu")
        }
    });
      //sricky menu end


//smooth scroll start
  var html_body = $('html, body');
  $('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 100
        }, 1500);
        return false;
      }
    }
  });
  //smooth scrool end


  //back to top button start

  //back to to button animation
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    if (sticky > 50) {
      $(".bottom-to-top").fadeIn(300)
    } else {
      $(".bottom-to-top").fadeOut(300)
    }
  });
  //back to top button click
  $(".bottom-to-top").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 2000)
  })
  //back to top button  end

});

// custom mobile menu start
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");


bars.addEventListener("click", function () {
  mobile_menu.classList.toggle("slide-menu");
  line_one.classList.toggle("close-line1");
  line_two.classList.toggle("close-line2");
  line_three.classList.toggle("close-line3");
})

// custom mobile menu end