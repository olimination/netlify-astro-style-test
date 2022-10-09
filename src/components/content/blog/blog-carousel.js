const BlogCarousel = function (Swiper, jQuery, selector) {
  const blogCarouselWrapper = jQuery(selector);
  const blogCarousel = blogCarouselWrapper.find('.swiper');

  function init() {
    const blogSwiper = new Swiper(blogCarousel.get(0), {
      slidesPerView: 1.2,
      spaceBetween: 0,
      loop: false,
      freeMode: {
        enabled: true,
        momentum: true,
        momentumBounceRatio: .8,
        momentumVelocityRatio: .8,
        momentumRatio: .8,
        sticky: true
      },
      breakpoints: {
        // when window width is >= 320px
        576: {
          slidesPerView: 2.2,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 0
        }
      }
    });
  }

  return {
    init
  }
}

export default BlogCarousel;
