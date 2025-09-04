import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import ButtonList from '../../components/ButtonList/ButtonList';
import LabeledContainer from '../../components/LabeledContainer/LabeledContainer';
import Select from '../../components/Select/Select';
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
  const { t } = useTranslation();
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
      <span className="absolute top-[-14px] z-20 bg-black-200 px-2">
        {t('Global.Filters')}
      </span>

      <section className="w-full flex flex-wrap justify-center">
        <LabeledContainer
          icon={<TagIcon className="w-4 h-4" />}
          name={t('Section.Filters.SearchBy')}
          children={
            <Select
              options={SEARCH_FILTERS_OPTIONS}
              value={currentFilterBy}
              onChange={handleFilterByChange}
              additionalClasses={'min-w-[200px] mr-6'}
              translateKey="SearchFiltersOptions"
              translated={true}
              sorted={true}
              name="searchBy"
              id="searchBy"
            />
          }
        />

        <LabeledContainer
          icon={<ArrowsUpDownIcon className="w-4 h-4" />}
          name={t('Section.Filters.Sort')}
          children={
            <Select
              options={SORT_OPTIONS}
              value={currentSort}
              onChange={handleSortChange}
              additionalClasses={'min-w-[200px]'}
              translateKey="SearchSortOptions"
              translated={true}
              name="sort"
              id="sort"
            />
          }
        />
      </section>

      <section className="w-full flex flex-wrap justify-center">
        <LabeledContainer
          icon={<ViewColumnsIcon className="w-4 h-4" />}
          name={t('Section.Filters.MaxColumns')}
          children={
            <ButtonList
              data={GRID_OPTIONS}
              onClick={handleGridView}
              selected={gridView}
              space="slim"
              margin="small"
              theme="transparent"
              themeSelected="primary"
            />
          }
        />

        <LabeledContainer
          icon={<SquaresPlusIcon className="w-4 h-4" />}
          name={t('Section.Filters.CardLimit')}
          children={
            <ButtonList
              data={PAGINATION_COUNTER}
              onClick={handleItemsLimitPage}
              selected={dataLimit}
              space="slim"
              margin="small"
              theme="transparent"
              themeSelected="primary"
            />
          }
        />
      </section>
    </div>
  );
};

export default Filters;
