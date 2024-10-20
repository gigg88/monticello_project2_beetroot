
  document.addEventListener('DOMContentLoaded', () => {

    $('.latest_news_slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="nav_button slick-prev"><</button>',
      nextArrow: '<button type="button" class="nav_button slick-next">></button>'
    });
  });