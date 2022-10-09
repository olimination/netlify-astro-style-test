const LocaleProvider = function () {
  const locale = 'de-CH';

  function getCurrentLocale() {
    return locale;
  }

  function getCurrentLanguageCode() {
    return 'de';
  }

  return {
    getCurrentLocale,
    getCurrentLanguageCode
  }
}

export default LocaleProvider;
