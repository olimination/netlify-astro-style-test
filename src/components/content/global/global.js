const Global = function (jQuery, selector) {
  const globalWrapper = jQuery(selector);

  function init() {
  }

  return {
    init
  }
}

export default Global;
