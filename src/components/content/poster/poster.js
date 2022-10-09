const Poster = function (Ukiyo, jQuery, selector) {

  const posterWrapper = jQuery(selector);
  const posterParallaxImage = posterWrapper.find('.parallax');

  function init() {
    const posterParallax = new Ukiyo(posterParallaxImage.get(0), {
      scale: 1.4,
      speed: 1.3,
      willChange: true
    });
  }

  return {
    init
  }
}

export default Poster;
