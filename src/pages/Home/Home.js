import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Card, Modal, Pagination, Suggestions } from '../../components';
import { DEFAULT_CARD } from '../../data/card';
import {
  GRID_OPTIONS,
  PAGINATION_COUNTER,
  SEARCH_ON_RESET,
} from '../../data/search';
import {
  getByTestId,
  getSorted,
  getSuggestionsOptions,
} from '../../lib/helper';
import { Search } from '../../section';

const Home = ({ testId }) => {
  const { t } = useTranslation();
  const [
    dataCard,
    // setDataCard
  ] = useState(DEFAULT_CARD);
  const [dataFiltered, setDataFiltered] = useState(DEFAULT_CARD);
  const [dataLimited, setDataLimited] = useState([]);

  /* :: Search & Filters :: */
  const [searchBy, setSearchby] = useState('year');
  const [sort, setSort] = useState('desc');
  const [searchValue, setSearchValue] = useState('');
  const [dataLimit, setDataLimit] = useState(PAGINATION_COUNTER[1]);
  const [suggestionsOptions, setSuggestionsOptions] = useState();
  const [dataPaginationPages, setDataPaginationPages] = useState(1);
  const [dataPaginationPageSelected, setDataPaginationPageSelected] =
    useState(0);

  /* :: Modal :: */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  /* :: Layout :: */
  const [grid, setGrid] = useState(GRID_OPTIONS[2]);

  const handleUpdateSuggestions = useCallback(() => {
    const updateSuggesstion = getSuggestionsOptions(searchBy, t);
    setSuggestionsOptions(updateSuggesstion);
  }, [searchBy, t]);

  const handleUpdateData = useCallback(() => {
    const paginationPages = Math.ceil(dataFiltered?.length / dataLimit?.value);
    const startPage = dataLimit?.value * dataPaginationPageSelected;
    const endPage = startPage + dataLimit?.value;
    const newData = dataFiltered.slice(startPage, endPage);
    setDataPaginationPages(paginationPages);
    setDataLimited(newData);
  }, [dataFiltered, dataLimit, dataPaginationPageSelected]);

  useEffect(() => {
    handleUpdateSuggestions();
  }, [handleUpdateSuggestions]);

  useEffect(() => {
    handleUpdateData();
  }, [handleUpdateData]);

  const handleSearch = (value, option, sortDirection) => {
    const searchOption = option || searchBy;
    const currentSortOption = sortDirection || sort;

    setDataPaginationPageSelected(0);

    if (searchOption !== searchBy) {
      setSearchby(option);
    }

    if (!value) {
      setSearchValue('');

      const sortedData = getSorted(dataCard, searchBy, currentSortOption);

      setDataFiltered(sortedData);
    } else {
      const filteredData = dataCard.filter((card) =>
        card[searchOption]?.toString()?.toLowerCase().includes(value),
      );

      const sortedData = getSorted(filteredData, searchBy, currentSortOption);

      setDataFiltered(sortedData);
      setSearchValue(value);
    }
  };

  const handleFilterBy = (value) => {
    setDataPaginationPageSelected(0);
    setSearchby(value);
  };

  const handleModal = (data) => {
    if (data) {
      setModalData(data);
    }

    setModalOpen(!modalOpen);
  };

  const handleSort = (value) => {
    setDataPaginationPageSelected(0);
    setSort(value);
    handleSearch(searchValue, undefined, sort);
  };

  const handleGridView = (data) => {
    setGrid(data);
  };

  const handleItemsLimitPage = (data) => {
    setDataPaginationPageSelected(0);
    setDataLimit(data);
  };

  const handlePagination = (value) => {
    setDataPaginationPageSelected(value);
  };

  const handleReset = () => {
    setSearchValue(SEARCH_ON_RESET?.searchValue);
    setSearchby(SEARCH_ON_RESET?.searchBy);
    setSort(SEARCH_ON_RESET?.sort);
    setGrid(SEARCH_ON_RESET?.grid);
    setDataPaginationPageSelected(SEARCH_ON_RESET?.page);
    setDataLimit(SEARCH_ON_RESET?.limit);
    setSearchValue(SEARCH_ON_RESET?.searchValue);
    handleSearch();
  };

  return (
    <div
      className={twMerge(
        'bg-white text-gray-900 w-ful',
        'min-h-auto flex flex-col overflow-hidden',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Search
        onSearch={handleSearch}
        onSearchBy={handleFilterBy}
        resultNumber={dataFiltered.length}
        searchValue={searchValue}
        searchBy={searchBy}
        sortValue={sort}
        onSort={handleSort}
        gridView={grid}
        dataLimit={dataLimit}
        handleGridView={handleGridView}
        handleItemsLimitPage={handleItemsLimitPage}
        handleReset={handleReset}
      />

      {suggestionsOptions?.data && (
        <Suggestions
          handleSearch={handleSearch}
          searchValue={searchValue}
          data={suggestionsOptions?.data}
          title={suggestionsOptions?.title}
          option={suggestionsOptions?.option}
        />
      )}

      <div
        className={twMerge(
          'w-full flex flex-wrap justify-center py-2 pb-8 col-span-2',
          'm-auto',
        )}
        style={{ maxWidth: grid?.value }}
      >
        {dataLimited?.map((item, index) => (
          <Card
            key={`${index}-${item.id}`}
            id={item?.id}
            name={item?.name}
            imgSrc={item?.img}
            desc={item?.desc}
            link={item?.link}
            linkName={item?.linkName}
            linkAvailable={item?.linkAvailable}
            tags={item?.tags}
            type={item?.type}
            year={item?.year}
            imgBig={item?.imgBig}
            handleSearch={handleSearch}
            handleModal={handleModal}
          />
        ))}

        {!dataLimited.length && (
          <div className="flex justify-center items-center min-h-[10vh]">
            {t('Section.Search.NoAvailableResult')}
          </div>
        )}

        <Pagination
          pages={dataPaginationPages}
          onClick={handlePagination}
          selected={dataPaginationPageSelected}
        />

        <Modal data={modalData} open={modalOpen} handleClose={handleModal} />
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  testId: PropTypes.string,
};

Home.defaultProps = {
  testId: '',
};
