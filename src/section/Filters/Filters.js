import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonList, LabeledContainer, Select } from '../../components';
import { LANGUAGE_DATA } from '../../data/langEn';
import {
  GRID_OPTIONS,
  PAGINATION_COUNTER,
  SEARCH_FILTERS_OPTIONS,
  SORT_OPTIONS,
} from '../../data/search';
import {
  ArrowsUpDownIcon,
  SquaresPlusIcon,
  TagIcon,
  ViewColumnsIcon,
} from '../../images';

const Filters = ({
  sort,
  filterBy,
  handleFilterBy,
  handleSort,
  gridView,
  handleGridView,
  dataLimit,
  handleItemsLimitPage,
}) => {
  const [currentSort, setCurrentSort] = useState(sort);
  const [currentFilterBy, setCurrentFilterBy] = useState(filterBy);

  useEffect(() => {
    setCurrentSort(sort);
  }, [sort]);

  useEffect(() => {
    setCurrentFilterBy(filterBy);
  }, [filterBy]);

  const handleSortChange = (e) => {
    setCurrentSort(e.target.value);
    handleSort?.(e.target.value);
  };

  const handleFilterByChange = (e) => {
    setCurrentFilterBy(e.target.value);
    handleFilterBy?.(e.target.value);
  };

  return (
    <div
      className={twMerge(
        'bg-black-200 flex justify-center items-center w-full',
        'border-black-400 border-1 border-t pt-4',
        'relative mt-2 flex flex-wrap',
      )}
    >
      <label className="absolute top-[-14px] z-20 bg-black-200 px-2">
        {LANGUAGE_DATA['Filters']}
      </label>

      <section className="w-full flex flex-wrap justify-center">
        <LabeledContainer
          icon={<TagIcon className="w-4 h-4" />}
          label={`${LANGUAGE_DATA['SearchBy']}:`}
          children={
            <Select
              options={SEARCH_FILTERS_OPTIONS}
              value={currentFilterBy}
              onChange={handleFilterByChange}
              additionalClasses={'min-w-[200px] mr-6'}
            />
          }
        />

        <LabeledContainer
          icon={<ArrowsUpDownIcon className="w-4 h-4" />}
          label={`${LANGUAGE_DATA['Sort']}:`}
          children={
            <Select
              options={SORT_OPTIONS}
              value={currentSort}
              onChange={handleSortChange}
              additionalClasses={'min-w-[200px]'}
            />
          }
        />
      </section>

      <section className="w-full flex flex-wrap justify-center">
        <LabeledContainer
          icon={<ViewColumnsIcon className="w-4 h-4" />}
          label={`${LANGUAGE_DATA['MaxColumns']}:`}
          children={
            <ButtonList
              data={GRID_OPTIONS}
              onClick={handleGridView}
              selected={gridView}
            />
          }
        />

        <LabeledContainer
          icon={<SquaresPlusIcon className="w-4 h-4" />}
          label={`${LANGUAGE_DATA['ViewLimit']}:`}
          children={
            <ButtonList
              data={PAGINATION_COUNTER}
              onClick={handleItemsLimitPage}
              selected={dataLimit}
            />
          }
        />
      </section>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
  testId: PropTypes.string,
};

Filters.defaultProps = {
  testId: '',
  value: '',
  options: [],
  onChange: undefined,
};
