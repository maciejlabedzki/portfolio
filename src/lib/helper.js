import {
  TAG_SUGGESTIONS,
  TYPE_SUGGESTIONS,
  YEAR_SUGGESTIONS,
} from '../data/search';
import {
  AdjustmentsVerticalIcon,
  BarsArrowDownIcon,
  BeakerIcon,
  BookmarkIcon,
  ClipboardIcon,
  CloudArrowDownIcon,
  CreditCardIcon,
  FlagIcon,
  GlobeAltIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  ViewColumnsIcon,
} from '../images';

export const getByTestId = (testId, suffix, testIdPropName = 'data-testid') => {
  if (!testId) {
    return;
  }
  if (!suffix) {
    return { [testIdPropName]: testId };
  }
  return {
    [testIdPropName]: `${testId}-${suffix}`,
  };
};

export const linkWithHttps = (link) => {
  if (link?.includes('https')) {
    return link;
  } else if (link) {
    return `https://${link}`;
  } else {
    return '';
  }
};

export const validTextLength = (
  value,
  maxLength = 20,
  allowed = true,
  suffix = '...',
) => {
  if (value.length > maxLength && allowed) {
    return value.slice(0, maxLength) + suffix;
  } else {
    return value;
  }
};

export const isAllInArrayEmpty = (arr) => {
  const countElements = arr.length;
  let res = 0;

  arr.map((el) => el === undefined && res++);

  return countElements === res ? true : false;
};

export const getIconFeaturePattern = (value) => {
  const CLASS_ICON = 'w-4 h-4 mr-2 text-inherit';

  switch (value) {
    case 'search':
      return <MagnifyingGlassIcon className={CLASS_ICON} />;
    case 'filter':
      return <ViewColumnsIcon className={CLASS_ICON} />;
    case 'language':
      return <FlagIcon className={CLASS_ICON} />;
    case 'cookies':
      return <ClipboardIcon className={CLASS_ICON} />;
    case 'data':
      return <CloudArrowDownIcon className={CLASS_ICON} />;
    case 'components':
      return <InboxIcon className={CLASS_ICON} />;
    case 'tests':
      return <AdjustmentsVerticalIcon className={CLASS_ICON} />;
    case 'card':
      return <CreditCardIcon className={CLASS_ICON} />;
    case 'pipeline':
      return <BarsArrowDownIcon className={CLASS_ICON} />;
    case 'changelog':
      return <GlobeAltIcon className={CLASS_ICON} />;
    case 'style':
      return <BeakerIcon className={CLASS_ICON} />;
    default:
      return <BookmarkIcon className={CLASS_ICON} />;
  }
};

export const getSuggestionsOptions = (option, t) => {
  let res = {};

  if (option === 'type') {
    res = {
      data: TYPE_SUGGESTIONS,
      option: 'type',
      title: t('Section.Search.TypeSuggestions'),
    };
  } else if (option === 'year') {
    res = {
      data: YEAR_SUGGESTIONS,
      option: 'year',
      title: t('Section.Search.YearSuggestions'),
    };
  } else if (option === 'tags') {
    res = {
      data: TAG_SUGGESTIONS,
      option: 'tags',
      title: t('Section.Search.TagsSuggestions'),
    };
  }

  return res;
};

/**
 * @data {Array}
 * @key {string}
 * @direction {string} "desc" || "asc"
 */
export const getSorted = (data, key, direction = 'desc') => {
  if (!data || !Array.isArray(data)) return;
  if (!key) return data;

  return [...data]?.sort((a, b) => {
    const keyA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const keyB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

    if (keyA > keyB) {
      return direction === 'desc' ? 1 : 1;
    }
    if (keyA < keyB) {
      return direction === 'desc' ? -1 : 1;
    }
    return 0;
  });
};

export const getPaginationList = (pages, title, selected) => {
  const paginationList = [];

  for (let i = 0; i < pages; i++) {
    paginationList.push({
      value: i,
      name: i + 1,
      title: `${title} ${i + 1}`,
      selected: i === selected,
    });
  }

  return paginationList;
};

export const getPaginationOptions = (
  pagesNumber,
  pageSelected,
  paginationList,
) => {
  const pagMin = pageSelected - 1 > 0 ? pageSelected - 1 : 0;
  const pagMax =
    pageSelected + 2 > pagesNumber ? pagesNumber : pageSelected + 2;
  const isLastVisible = pagesNumber > pagMax;
  const isFirstVisible = 1 <= pagMin;
  const pagLimited = paginationList.slice(pagMin, pagMax);
  const isLimited = pagesNumber > 5;
  const pagination = isLimited ? pagLimited : paginationList;

  return { pagination, isLimited, isLastVisible, isFirstVisible };
};

export const getSearchPlaceholderName = (value, t) => {
  if (!value) return '';

  const filterBy = value.slice(0, 1).toLocaleUpperCase() + value.slice(1);

  return (
    t('Section.Search.SearchBy') +
    ' ' +
    t(`SearchFiltersOptions.${filterBy}`).toLocaleLowerCase()
  );
};

export const eventValidateScrollHeight = (status, update) => {
  if (!status && window.pageYOffset > 100) {
    update(true);
  } else if (status && window.pageYOffset <= 100) {
    update(false);
  }
};
