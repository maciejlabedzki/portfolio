/**
 * Fake translation function
 * @param {*} p
 * @returns
 */
const t = (p) => p;

/**
 * WARNING: this list is not officially supported by i18next library. It's just a js file that
 * we use to "fake" the use of translation keys that would otherwise be used dynamically.
 * Manual upkeep of this list is required for us to cleanup old keys from time to time.
 */
const i18nAlwaysInclude = [
  // Search Filters Options
  t('SearchFiltersOptions.Description'),
  t('SearchFiltersOptions.ID'),
  t('SearchFiltersOptions.Link'),
  t('SearchFiltersOptions.Name'),
  t('SearchFiltersOptions.Tags'),
  t('SearchFiltersOptions.Type'),
  t('SearchFiltersOptions.Year'),

  // Navigation
  t('Navigation.Home'),
  t('Navigation.Features'),
  t('Navigation.Cookies'),
  t('Navigation.Admin'),
];

export default i18nAlwaysInclude;
