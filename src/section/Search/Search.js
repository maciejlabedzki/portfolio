import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Button, Input, LabeledContainer } from '../../components';
import {
  AdjustmentsVerticalIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from '../../images';
import { getByTestId } from '../../lib/helper';
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
          label={t('Global.Search')}
          children={
            <div className="flex justify-center">
              <div className="relative">
                <Input
                  onChange={handleChange}
                  value={search}
                  placeholder={`${t('Section.Search.SearchBy')} ${filterBy}`}
                />

                <button
                  className={twMerge(
                    'absolute right-0.5 top-0.5 z-10 text-sm',
                    'text-black px-1 mx-1 rounded-full bg-gray-100 w-5 h-5',
                    'justify-center items-center flex text-gray',
                  )}
                  onClick={handleClear}
                  title={t('Section.Search.ClearButton')}
                >
                  X
                </button>
              </div>

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
              />
            </div>
          }
        />

        <Button
          name={
            <div className="flex flex-row px-1 justify-center items-center">
              <AdjustmentsVerticalIcon className="w-5 h-5 mr-1" />
              {t('Section.Search.Filters')}
            </div>
          }
          title={t('Section.Search.Filters')}
          onClick={handleFilterOpen}
          space="leftRight"
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
