// slider
jQuery(document).ready(function () {
  //  owl carousel 
  jQuery("#owl_slider").owlCarousel({
    autoplay: true,
    items:1,
  });
  /* 40N) slicknav Mobile Menu */
  jQuery('#nav').slicknav();
});


// counterUp number
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

/*=======================mini slider_swiper========================*/ 
let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

