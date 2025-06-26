import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Button, Input, LabeledContainer } from '../../components';
import {
  AdjustmentsVerticalIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from '../../images';
import { getByTestId, getSearchPlaceholderName } from '../../lib/helper';
import { Filters } from '../../section';

const Search = ({
  onSearch,
  onSearchBy,
  onSort,
  searchValue,
  searchBy,
  sortValue,
  gridView,
  dataLimit,
  handleGridView,
  handleItemsLimitPage,
  resultNumber,
  handleReset,
  onFilterOpen,
  testId,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState();
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    setFilterBy(searchBy);
  }, [searchBy]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
    onSearch?.('');
  };

  const handleFilterBy = (value) => {
    handleClear();
    setFilterBy?.(value);
    onSearchBy?.(value);
  };

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
    onFilterOpen(!filterOpen);
  };

  const handleSort = (value) => {
    onSort?.(value);
  };

  return (
    <div
      className={twMerge(
        'm-h-10 bg-black-200 w-full text-white justify-start',
        'p-2 flex flex-wrap items-center',
      )}
      {...getByTestId(testId, 'conatiner')}
    >
      <div className="max-w-[1200px] flex flex-col items-center sm:flex-row m-auto">
        <LabeledContainer
          icon={<MagnifyingGlassIcon className="w-4 h-4" />}
          name={t('Global.Search')}
          children={
            <div className="flex justify-center items-center">
              <Input
                name="search"
                onChange={handleChange}
                value={search}
                autocomplete={'off'}
                placeholder={getSearchPlaceholderName(filterBy, t)}
                additionalClassesInput={'pr-7'}
                hasClear={true}
                onClear={handleClear}
              />

              <span
                className={twMerge('ml-1 mt-0.5 text-sm text-white w-[50px]')}
                title={t('Section.Search.ResultNumber')}
              >
                ( {resultNumber} )
              </span>

              <Button
                name={<ArrowPathIcon className="w-4 h-4" />}
                theme="transparent"
                title={t('Section.Search.Reset')}
                onClick={handleReset}
                hover="fade"
              />
            </div>
          }
        />

        <Button
          icon={<AdjustmentsVerticalIcon className="w-5 h-5 mr-1" />}
          name={t('Section.Search.Filters')}
          space="slim"
          theme="primary"
          onClick={handleFilterOpen}
        />
      </div>

      {filterOpen && (
        <div className="w-full justify-center flex items-center p-2">
          <Filters
            filterBy={filterBy}
            sort={sortValue}
            handleFilterBy={handleFilterBy}
            handleSort={handleSort}
            gridView={gridView}
            dataLimit={dataLimit}
            handleGridView={handleGridView}
            handleItemsLimitPage={handleItemsLimitPage}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
