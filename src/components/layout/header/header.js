const Header = function (jQuery, selector) {
  let lastScrollPosition = 0;
  const headerWrapper = jQuery(selector);
  const toggleMainNavigationButton = headerWrapper.find('.header-toggle-main-navigation');

  function init() {
    /*toggleHeader();*/

    toggleMainNavigationButton.click(function (event) {
      event.preventDefault();
      jQuery('body').toggleClass('main-navi-open');
      jQuery('html').toggleClass('main-navi-open');
      toggleMainNavigationButton.toggleClass('close-me')
    });


   /* window.onscroll = function() {
      toggleHeader()
    };*/
  }

  function toggleHeader() {


    if (document.documentElement.scrollTop > (headerWrapper.outerHeight() * 0)) {
      headerWrapper.addClass('hide-logo');

      if(document.documentElement.scrollTop > lastScrollPosition) {
        headerWrapper.addClass('hidden');
      } else {
        headerWrapper.removeClass('hidden');
      }
    } else {
      headerWrapper.removeClass('hidden');
      headerWrapper.removeClass('hide-logo');
    }

    lastScrollPosition = document.documentElement.scrollTop;
  }

  return {
    init
  }
}

export default Header;
