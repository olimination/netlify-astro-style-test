const Base = function (jQuery, ImagesLoaded, selector) {
  const baseWrapper = jQuery(selector);

  function init() {
    baseWrapper.addClass('loaded');
    let colorScheme = getCookie('color-scheme');

    if(isTouchEnabled()) {
      jQuery('html').addClass('touch-device');
    }


    if(colorScheme == 'dark') {
      jQuery('body').addClass('darkmode');
      jQuery('body').removeClass('lightmode');
    } else if(colorScheme == 'light') {
      jQuery('body').removeClass('darkmode');
      jQuery('body').addClass('lightmode');
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        jQuery('body').addClass('darkmode');
        jQuery('body').removeClass('lightmode');
      } else {
        jQuery('body').removeClass('darkmode');
        jQuery('body').addClass('lightmode');
      }
    }
  }

  function getCookie (name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



  function isTouchEnabled() {
    return ( 'ontouchstart' in window );
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: .25})

  const scrollRevealItems = document.getElementsByClassName('scroll-reveal');

  for (let i = 0; i < scrollRevealItems.length; i++) {
    io.observe(scrollRevealItems[i])
  }

  return {
    init
  }
}

export default Base;
