import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card, Modal, Pagination, Suggestions } from '../../components';
import { DEFAULT_CARD } from '../../data/card';
import { LANGUAGE_DATA } from '../../data/langEn';
import { GRID_OPTIONS, PAGINATION_COUNTER } from '../../data/search';
import {
  getByTestId,
  getSorted,
  getSuggestionsOptions,
} from '../../lib/helper';
import { Search } from '../../section';

const Home = ({ testId }) => {
  const [dataCard, setDataCard] = useState(DEFAULT_CARD);
  const [dataFiltered, setDataFiltered] = useState([]);

  /* :: Search & Filters :: */
  const [searchBy, setSearchby] = useState('id');
  const [sort, setSort] = useState('desc');
  const [searchValue, setSearchValue] = useState('');
  const [dataLimit, setDataLimit] = useState(PAGINATION_COUNTER[0]);
  const [suggestionsOptions, setSuggestionsOptions] = useState();

  /* :: Modal :: */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  /* :: Layout :: */
  const [grid, setGrid] = useState(GRID_OPTIONS[2]);

  const handleUpdateSuggestions = useCallback(() => {
    const updateSuggesstion = getSuggestionsOptions(searchBy);
    setSuggestionsOptions(updateSuggesstion);
  }, [searchBy]);

  const handleUpdateData = useCallback(() => {
    const newData = dataCard.slice(0, dataLimit.value);
    setDataFiltered(newData);
  }, [dataCard, dataLimit]);

  useEffect(() => {
    handleUpdateSuggestions();
  }, [handleUpdateSuggestions]);

  useEffect(() => {
    handleUpdateData();
  }, [handleUpdateData]);

  const handleSearch = (value, option, sortDirection) => {
    const searchOption = option || searchBy;
    const currentSortOption = sortDirection || sort;

    if (searchOption !== searchBy) {
      setSearchby(option);
    }

    if (!value) {
      setSearchValue('');

      const sortedData = getSorted(DEFAULT_CARD, searchBy, currentSortOption);

      setDataCard(sortedData);
    } else {
      const filteredData = DEFAULT_CARD.filter((card) =>
        card[searchOption]?.toString()?.toLowerCase().includes(value),
      );

      const sortedData = getSorted(filteredData, searchBy, currentSortOption);

      setDataCard(sortedData);
      setSearchValue(value);
    }
  };

  const handleFilterBy = (value) => {
    setSearchby(value);
  };

  const handleModal = (data) => {
    if (data) {
      setModalData(data);
    }

    setModalOpen(!modalOpen);
  };

  const handleSort = (value) => {
    setSort(value);
    handleSearch(searchValue, undefined, value);
  };

  const handleGridView = (data) => {
    setGrid(data);
  };

  const handleCounter = (data) => {
    setDataLimit(data);
  };

  const handlePagination = (value) => {
    console.log(value);
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
        resultNumber={dataCard.length}
        searchValue={searchValue}
        searchBy={searchBy}
        sortValue={sort}
        onSort={handleSort}
        gridView={grid}
        dataLimit={dataLimit}
        handleGridView={handleGridView}
        handleCounter={handleCounter}
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
        style={{ maxWidth: grid.value }}
      >
        {dataFiltered?.map((item, index) => (
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

        {!dataCard.length && (
          <div className="flex justify-center items-center min-h-[10vh]">
            {LANGUAGE_DATA.SearchNoResult}
          </div>
        )}

        <Pagination pages={200} onClick={handlePagination} selected={9} />

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
