import * as Sentry from '@sentry/react';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import Suggestions from '../../components/Suggestions/Suggestions';
import {
  GRID_OPTIONS,
  PAGINATION_COUNTER,
  SEARCH_ON_RESET,
} from '../../data/search';
import useDebounceCallback from '../../hooks/useDebounceCallback';
import { getUrl } from '../../lib/fetch';
import { getByTestId, getSuggestionsOptions } from '../../lib/helper';
import { Search } from '../../section';
import Code from '../../section/Code/Code';
import Loading from '../../section/Loading/Loading';

const PageHome = ({ testId }) => {
  const { t } = useTranslation();
  const [dataCard, setDataCard] = useState([]);
  const [dataCode, setDataCode] = useState([]);
  // const [dataFiltered, setDataFiltered] = useState([]);
  // const [dataLimited, setDataLimited] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const CONTENT_TYPE = 'portfolio';

  /* :: Search & Filters :: */
  const [searchBy, setSearchby] = useState('year');
  const [sort, setSort] = useState('asc');
  const [searchValue, setSearchValue] = useState('');
  const [dataLimit, setDataLimit] = useState(PAGINATION_COUNTER[1]);
  const [suggestionsOptions, setSuggestionsOptions] = useState();
  const [dataPaginationPages, setDataPaginationPages] = useState(1);
  const [dataPaginationPageSelected, setDataPaginationPageSelected] =
    useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  /* :: Modal :: */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  /* :: Layout :: */
  const [grid, setGrid] = useState(GRID_OPTIONS[2]);

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: Home');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  const getImgUrlFromAsset = (asset, imgID) => {
    for (var i = 0; i < asset.length; i++) {
      if (asset[i].sys.id === imgID) {
        return asset[i].fields.file.url;
      }
    }
  };

  const generateData = useCallback((data) => {
    const assets = data.includes.Asset;
    const res = data.items.map((item) => {
      return {
        id: item.fields.id,
        img:
          item.fields.img?.sys?.id &&
          getImgUrlFromAsset(assets, item.fields.img.sys.id),
        imgBig:
          item.fields.imgBig?.sys?.id &&
          getImgUrlFromAsset(assets, item.fields.imgBig.sys.id),
        link: item.fields.link,
        linkName: item.fields.linkName,
        linkAvailable: item.fields.linkAvailable,
        name: item.fields.name,
        tags: item.fields.tags,
        type: item.fields.type,
        desc: item.fields.desc,
        year: item.fields.year,
      };
    });

    return res;
  }, []);

  const generateCodeData = useCallback((data) => {
    const assets = data.includes.Asset;
    const res = data.items.map((item) => {
      return {
        id: item.fields.id,
        img:
          item.fields.img?.sys?.id &&
          getImgUrlFromAsset(assets, item.fields.img.sys.id),
        name: item.fields.name,
        tag: item.fields.tag,
        visible: item.fields.visible,
      };
    });

    return res;
  }, []);

  const fetchData = useCallback(async () => {
    try {
      let currentOrder = 'year';
      if (searchBy === 'tags') {
        if (sort === 'asc') {
          currentOrder = `fields.year`;
        } else {
          currentOrder = `-fields.year`;
        }
      } else {
        if (sort === 'asc') {
          currentOrder = `fields.${searchBy}`;
        } else {
          currentOrder = `-fields.${searchBy}`;
        }
      }

      const url = getUrl({
        contentType: CONTENT_TYPE,
        order: currentOrder,
        limit: dataLimit.value,
        skip: dataLimit.value * dataPaginationPageSelected,
        fields: [{ id: searchBy, value: searchValue }],
        fieldsWithMatch: ['desc', 'name', 'tags', 'link'],
      });

      const res = await fetch(url);

      if (!res.ok) throw new Error('Błąd w zapytaniu');

      const data = await res.json();

      if (data.items.length > 0) {
        const dataIncludeImgUrlFromAsset = generateData(data);

        setDataCard(dataIncludeImgUrlFromAsset);
      } else {
        setDataCard([]);
      }

      setDataPaginationPages(Math.ceil(data.total / data.limit));
      setDataLoading(false);
    } catch (err) {
      toast.error(`Error on fetch portfolio data.`);
      setDataLoading(false);
    }
  }, [
    generateData,
    searchBy,
    searchValue,
    dataLimit,
    dataPaginationPageSelected,
    sort,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchCodeData = useCallback(async () => {
    try {
      const url = getUrl({
        contentType: 'code',
        order: 'fields.id',
      });

      const res = await fetch(url);

      if (!res.ok) throw new Error('Błąd w zapytaniu');

      const data = await res.json();

      const dataIncludeImgUrlFromAsset = generateCodeData(data);

      setDataCode(dataIncludeImgUrlFromAsset);
    } catch (err) {
      toast.error(`Error on fetch portfolio data.`);
    }
  }, [generateCodeData]);

  useEffect(() => {
    fetchCodeData();
  }, [fetchCodeData]);

  const handleUpdateSuggestions = useCallback(() => {
    const updateSuggesstion = getSuggestionsOptions(searchBy, t);
    setSuggestionsOptions(updateSuggesstion);
  }, [searchBy, t]);

  useEffect(() => {
    handleUpdateSuggestions();
  }, [handleUpdateSuggestions]);

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
  };

  const handleFilterOpen = (value) => {
    setFilterOpen(value);
  };

  const handleCodeClick = (value) => {
    if (value === searchValue) {
      handleReset();
    } else {
      setSearchby('tags');
      setSearchValue(value);
    }
  };

  const handleOnSearchInput = useDebounceCallback((value) => {
    setSearchValue(value);
  }, 500);

  return (
    <div
      className={twMerge(
        'bg-white text-gray-900 w-ful',
        'min-h-auto flex flex-col overflow-hidden',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Home.Title')}</title>

      <Search
        onSearch={handleOnSearchInput}
        onSearchBy={handleFilterBy}
        resultNumber={dataCard.length}
        searchValue={searchValue}
        searchBy={searchBy}
        sortValue={sort}
        onSort={handleSort}
        gridView={grid}
        dataLimit={dataLimit}
        handleGridView={handleGridView}
        handleItemsLimitPage={handleItemsLimitPage}
        handleReset={handleReset}
        onFilterOpen={handleFilterOpen}
      />

      {suggestionsOptions?.data && filterOpen && (
        <Suggestions
          // handleSearch={handleSearch}
          searchValue={searchValue}
          data={suggestionsOptions?.data}
          title={suggestionsOptions?.title}
          option={suggestionsOptions?.option}
        />
      )}

      <Code data={dataCode} onClick={handleCodeClick} selected={searchValue} />

      <div
        className={twMerge(
          'w-full flex flex-wrap justify-center py-2 pb-8 col-span-2',
          'm-auto',
        )}
        style={{ maxWidth: grid?.value }}
      >
        {dataLoading && <Loading size="wide" />}

        {!dataLoading &&
          dataCard?.map((item, index) => (
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
              // handleSearch={handleSearch}
              handleModal={handleModal}
            />
          ))}

        {!dataLoading && !dataCard.length && (
          <div className="flex justify-center items-center min-h-[10vh]">
            {t('Section.Search.NoAvailableResult')}
          </div>
        )}

        {!dataLoading && (
          <Pagination
            pages={dataPaginationPages}
            onClick={handlePagination}
            selected={dataPaginationPageSelected}
          />
        )}

        <Modal data={modalData} open={modalOpen} handleClose={handleModal} />
      </div>
    </div>
  );
};

export default PageHome;
