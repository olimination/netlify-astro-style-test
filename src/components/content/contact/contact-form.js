import NumberFormatter from "../../common/number-formatter.js";

const ContactForm = function (jQuery, selectorFilter) {
  const numberFormatter = NumberFormatter();
  const contactFormWrapper = jQuery(selectorFilter);
  const budgetFieldset = contactFormWrapper.find(
    ".contact-form-fieldset-budget"
  );
  const budgetRangeInput = contactFormWrapper.find("input.input-budget");
  const budgetRangeOutput = contactFormWrapper.find("output#budget-value");
  const budgetRangeMin = jQuery(budgetRangeInput).attr("min");
  const budgetRangeMax = jQuery(budgetRangeInput).attr("max");
  const customerNeedMobileSelect = contactFormWrapper.find("select.input-customer-need");
  const customSelect = jQuery(".select");
  const customCustomerNeedInput = contactFormWrapper.find("input#custom-input-customer-need");
  const resizingInput = jQuery(".resizing-input");
  const textMeasurer = jQuery(".text-measurer");

  function init() {
    updateBudgetRangeIndicator();
    updateBudgetOutputIndicator();
    bindBudgetOnInputEvent();
    bindCustomerNeedMobileSelectOnChange();
    bindCustomSelectEvents();
    bindResizeOnInputEvent();
    setInitialStateForCustomerNeedSelect();
  }

  function bindCustomerNeedMobileSelectOnChange() {
    customerNeedMobileSelect.on("change", function () {
      toggleBudgetFieldset();
    });
  }

  function bindCustomSelectEvents() {
    customSelect.on("click", function (e) {
      jQuery(this).children(".options").toggleClass("show");
    });

    jQuery(".option").on("click", function (e) {
      handleCustomSelectOptionClick(e);
    });
  }

  function bindBudgetOnInputEvent() {
    budgetRangeInput.on("input", function () {
      updateBudgetRangeIndicator();
      updateBudgetOutputIndicator();
      jQuery("#budget-value").addClass('selected');
    });
  }

  function bindResizeOnInputEvent() {
    resizingInput.each(function () {
      jQuery(this).on("input", resizeInputField);
    });
  }

  function setInitialStateForCustomerNeedSelect() {
    if (isCustomerNeedMobileSelectHidden()) {
      enableFormField(customCustomerNeedInput);
      disableFormField(customerNeedMobileSelect);
    } else {
      enableFormField(customerNeedMobileSelect);
      disableFormField(customCustomerNeedInput);
    }
  }

  function handleCustomSelectOptionClick(e) {
    const el = jQuery(e.currentTarget);
    customCustomerNeedInput.val(el.data("value"));
    toggleBudgetFieldset();

    jQuery("#fake-select-input .text").text(
      jQuery(el.children(".text")[0]).text()
    );
    jQuery("#fake-select-input .text").addClass('selected')
  }

  function toggleBudgetFieldset() {
    const currentNeed = getCurrentCustomerNeedValue();
    if (currentNeed == "support") {
      budgetFieldset.hide();
    } else {
      budgetFieldset.show();
    }
  }

  function disableFormField(jqElement) {
    jqElement.prop("disabled", true);
  }

  function enableFormField(jqElement) {
    jqElement.prop("disabled", false);
  }

  function getCurrentCustomerNeedValue() {
    if (isCustomerNeedMobileSelectHidden()) {
      return customCustomerNeedInput.val();
    } else {
      return customerNeedMobileSelect.val();
    }
  }

  function isCustomerNeedMobileSelectHidden() {
    return customerNeedMobileSelect.css("display") === "none";
  }

  function updateBudgetRangeIndicator() {
    const currentBudgetValue = getCurrentBudgetValue();

    budgetRangeInput.css(
      "background-size",
      ((currentBudgetValue - budgetRangeMin) * 100) /
      (budgetRangeMax - budgetRangeMin) + "% 100%"
    );
  }

  function updateBudgetOutputIndicator() {
    budgetRangeOutput.val(formatAmount(getCurrentBudgetValue()));
  }

  function getCurrentBudgetValue() {
    return budgetRangeInput.val();
  }

  function formatAmount(amount) {
    let output = numberFormatter.formatAmount(amount);

    if (amount > 250000) {
      output = numberFormatter.formatAmount(250000) + "+";
    } else if (amount < 5000) {
      output = "<" + numberFormatter.formatAmount(5000);
    }

    return output;
  }

  function resizeInputField(e) {
    const measure = jQuery(textMeasurer);
    // add a character to make sure trailing whitespace is included (because it's not trailing anymore), removed later
    measure.text(this.value + "*");
    const width = measure.width();

    if (this.value.length === 0) {
      jQuery(this).width("");
    } else {
      jQuery(this).width(width - 12);
    }
  }

  return {
    init,
  };
};

export default ContactForm;
