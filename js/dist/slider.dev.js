"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('.latest_news_slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="nav_button slick-prev"><</button>',
    nextArrow: '<button type="button" class="nav_button slick-next">></button>'
  });
  $('.hero_slider_content').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    dotsClass: 'slick-dots vertical',
    appendDots: $('.hero_slider_content') // Append dots to the slider container

  });
});