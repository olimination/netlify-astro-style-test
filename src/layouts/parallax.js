const Parallax = function (SimpleParallax, ImagesLoaded, jQuery, selector) {
  const globalImagesWrapper = jQuery('main');
  const globalParallaxImages = document.querySelectorAll(selector);

  function init() {
    if(globalParallaxImages.length > 0) {
      ImagesLoaded(globalImagesWrapper.get(0), function () {
        globalParallaxImages.forEach(image => {
          /*new Ukiyo(image, {
            scale: 1.1,
            speed: 1.9
          });*/

          new SimpleParallax(image, {
            delay: 0,
            scale: 1.2,
            overflow: false
          });
        });
      });
    }
  }

  return {
    init
  }
}

export default Parallax;
