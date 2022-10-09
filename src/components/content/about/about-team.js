const AboutTeam = function (Isotope, ImagesLoaded, jQuery, selectorFilter, selectorList) {
  const teamFilterWrapper = jQuery(selectorFilter);
  const teamListWrapper = jQuery(selectorList);
  const setTeamFilterButton = teamFilterWrapper.find('.isotope-filter');

  function init() {
    ImagesLoaded(teamListWrapper.get(0), function () {
      const teamIsotope = new Isotope( document.querySelector('.isotope-grid'), {
        itemSelector: '.isotope-element',
        percentPosition: true,
        isInitLayout: true,
        masonry: {
          columnWidth: '.isotope-grid-sizer'
        },
        getSortData: {
          firstname: '[data-sort]'
        },
        sortBy: 'firstname',
        sortAscending: true
      });

      setTeamFilterButton.click(function (event) {
        event.preventDefault();
        if(jQuery(this).hasClass('active')) {
          setFilter(teamIsotope, '');
        } else {
          setFilter(teamIsotope, jQuery(this));
        }
      });
    });
  }

  function setFilter(objIsotope, elmClicked) {
    let filterClass = '*';
    setTeamFilterButton.removeClass('active');

    if(elmClicked != '') {
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

export default AboutTeam;
