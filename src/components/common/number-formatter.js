import LocaleProvider from "./locale-provider";

const NumberFormatter = function () {
  const locale = LocaleProvider().getCurrentLocale();
  const intlNumberFormatInstance = new Intl.NumberFormat(locale);

  function formatAmount(amount) {
    return intlNumberFormatInstance.format(amount);
  }

  return {
    formatAmount
  }
}

export default NumberFormatter;
