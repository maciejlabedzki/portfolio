import { LANGUAGE_DATA } from '../data/langEn';
import { TYPE_SUGGESTIONS, YEAR_SUGGESTIONS } from '../data/search';

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
  }
  if (link) {
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

export const getSuggestionsOptions = (option) => {
  let res = {};

  if (option === 'type') {
    res = {
      data: TYPE_SUGGESTIONS,
      option: 'type',
      title: LANGUAGE_DATA['SearchTypeSuggestions'],
    };
  } else if (option === 'year') {
    res = {
      data: YEAR_SUGGESTIONS,
      option: 'year',
      title: LANGUAGE_DATA['SearchYearSuggestions'],
    };
  }

  return res;
};

export const getSorted = (data, key, direction = 'desc') => {
  if (!data || !Array.isArray(data)) return;
  if (!key) return data;

  return [...data]?.sort((a, b) => {
    const keyA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const keyB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

    if (keyA > keyB) {
      return direction === 'desc' ? -1 : 1;
    }
    if (keyA < keyB) {
      return direction === 'desc' ? 1 : -1;
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
