const SEARCH_FILTERS_OPTIONS = [
  { value: 'desc', name: 'Description' },
  { value: 'id', name: 'Id' },
  { value: 'link', name: 'Link' },
  { value: 'name', name: 'Name' },
  { value: 'tags', name: 'Tags' },
  { value: 'type', name: 'Type' },
  { value: 'year', name: 'Year' },
];

const SORT_OPTIONS = [
  { value: 'asc', name: 'Ascending' },
  { value: 'desc', name: 'Descending' },
];

const TYPE_SUGGESTIONS = ['animation', 'design', 'tool', 'website', 'widget'];

const YEAR_SUGGESTIONS = ['2025', '2024', '2023', '2022', '2021', '2020'];

const GRID_OPTIONS = [
  { name: 1, value: '400px' },
  { name: 2, value: '800px' },
  { name: 3, value: '1200px' },
  { name: 4, value: '1600px' },
  { name: 'full', value: 'none' },
];

const PAGINATION_COUNTER = [
  { name: 3, value: 3 },
  { name: 6, value: 6 },
  { name: 12, value: 12 },
  { name: 24, value: 24 },
  { name: 48, value: 48 },
];

const SEARCH_ON_RESET = {
  searchValue: '',
  sort: 'desc',
  page: 0,
  searchBy: 'year',
  grid: { name: 3, value: '1200px' },
  limit: { name: 6, value: 6 },
};

export {
  GRID_OPTIONS,
  PAGINATION_COUNTER,
  SEARCH_FILTERS_OPTIONS,
  SEARCH_ON_RESET,
  SORT_OPTIONS,
  TYPE_SUGGESTIONS,
  YEAR_SUGGESTIONS,
};
