const BlogOverview = function (Isotope, ImagesLoaded, jQuery, selectorFilter, selectorList) {
  const blogFilterWrapper = jQuery(selectorFilter);
  const blogListWrapper = jQuery(selectorList);
  const setBlogFilterButton = blogFilterWrapper.find('.isotope-filter');

  function init() {
    ImagesLoaded(blogListWrapper.get(0), function () {
      const blogIsotope = new Isotope(document.querySelector('.isotope-grid'), {
        itemSelector: '.isotope-element',
        percentPosition: true,
        isInitLayout: true,
        masonry: {
          columnWidth: '.isotope-grid-sizer'
        }
      });

      setBlogFilterButton.click(function (event) {
        event.preventDefault();
        if (jQuery(this).hasClass('active')) {
          setFilter(blogIsotope, '');
        } else {
          setFilter(blogIsotope, jQuery(this));
        }
      });
    });
  }

  function setFilter(objIsotope, elmClicked) {
    let filterClass = '*';
    setBlogFilterButton.removeClass('active');

    if (elmClicked != '') {
      filterClass = '.' + elmClicked.attr('data-filter');
      elmClicked.addClass('active');
    }

    objIsotope.arrange({
      filter: filterClass
    });
  }

  return {
    init
  }
}

export default BlogOverview;
