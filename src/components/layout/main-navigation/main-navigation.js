const MainNavigation = function (jQuery, selector) {

  const mainNavWrapper = jQuery(selector);
  const mainNavElement = mainNavWrapper.find('nav');
  const darkmodeSwitch = mainNavWrapper.find('.main-navigation-darkmode-switch');

  function init() {


    darkmodeSwitch.click(function (event) {
      event.preventDefault();
      darkmodeSwitch.toggleClass('dark');

      if(jQuery('body').hasClass('darkmode')) {
        jQuery('body').removeClass('darkmode');
        jQuery('body').addClass('lightmode');
        document.cookie = `color-scheme=light; path=/; max-age=${60 * 60 * 24 * 14};`;
      } else {
        jQuery('body').addClass('darkmode');
        jQuery('body').removeClass('lightmode');
        document.cookie = `color-scheme=dark; path=/; max-age=${60 * 60 * 24 * 14};`;
      }



    });

    document.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
        event.preventDefault();
        jQuery('body').removeClass('main-navi-open');
        jQuery('html').removeClass('main-navi-open');
      }
    });
  }

  return {
    init
  }
}

export default MainNavigation;
