const ProjectList = function (Isotope, jQuery, selectorFilter, selectorList) {
  const projectListFilterWrapper = jQuery(selectorFilter);
  const projectListListWrapper = jQuery(selectorList);
  const setProjectListFilterButton = projectListFilterWrapper.find('.isotope-filter');

  function init() {
    loadProjectListItems();
  }


  function loadProjectListItems() {
    fetch('https://api.sheetson.com/v2/sheets/Kundenliste', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer kVilLyr60JFzhIiIRHqcrswIlPXh8hFgBBD0LZKYO5k_ILiWOQ_MVYvg4qH_pQ',
        'X-Spreadsheet-Id': '1M29KP_fU_DH581eB6Uq8lqoPhWVRUl3UGj118H5w-jI'
      }
    }).then(response => response.json())
    .then((projectList) => {
      for (let project of projectList.results) {
        addProjectToList(project);
      }
    }).then(isotope => {
      initIsotope();
    })
  }

  function initIsotope() {
    const projectListIsotope = new Isotope(document.querySelector('.isotope-grid'), {
      itemSelector: '.isotope-element',
      percentPosition: true,
      isInitLayout: true,
      layoutMode: 'masonry',
      getSortData: {
        year: '[data-sort-year]',
        customer: '[data-sort-customer]'
      },
      sortBy:[ 'year', 'customer' ],
      sortAscending: {
        year: false,
        customer: true
      }
    });

    setProjectListFilterButton.click(function (event) {
      event.preventDefault();
      if(jQuery(this).hasClass('active')) {
        setFilter(projectListIsotope, '');
      } else {
        setFilter(projectListIsotope, jQuery(this));
      }
    });
  }

  function addProjectToList(objProject) {
    jQuery('#json-data-wrapper').append('<div class="project-list-row isotope-element" data-sort-year="' + objProject.Jahr + '"  data-sort-customer="' + objProject.Name + '"><div><a href="' + objProject.Url + '" target="_blank">' + objProject.Name + '</a></div><div class="project-list-services">' + objProject.Services + '</div><div class="text-end">' + objProject.Jahr + '</div></div>');
  }

  function setFilter(objIsotope, elmClicked) {
    let filterText = '';
    setProjectListFilterButton.removeClass('active');

    if(elmClicked != '') {
      filterText =  elmClicked.attr('data-filter');
      elmClicked.addClass('active');
    }

    objIsotope.arrange({
      filter: function( itemElem ) {
        var services = itemElem.querySelector('.project-list-services').innerText;
        return services.match(filterText);
      }
    });
  }

  return {
    init
  }
}

export default ProjectList;
