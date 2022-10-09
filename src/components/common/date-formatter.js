import LocaleProvider from "./locale-provider";

const DateFormatter = function () {
  const locale = LocaleProvider().getCurrentLocale();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateTimeFormatInstance = new Intl.DateTimeFormat(locale, options);

  function formatDate(currentDate) {
    return dateTimeFormatInstance.format(currentDate);
  }

  return {
    formatDate
  }
}

export default DateFormatter;
