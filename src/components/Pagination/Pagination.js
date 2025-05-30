import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  getByTestId,
  getPaginationList,
  getPaginationOptions,
} from '../../lib/helper';
import { Button } from '../index';
import PaginationDots from './subcomponents/PaginationDots';

const Pagination = ({ pages, onClick, selected, testId }) => {
  const [currentSelected, setCurrentSelected] = useState(selected);
  const TEXT_TITLE_PAGE = 'Page';

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  if (pages <= 1) return;

  const paginationList = getPaginationList(
    pages,
    TEXT_TITLE_PAGE,
    currentSelected,
  );

  const paginationOption = getPaginationOptions(
    pages,
    currentSelected,
    paginationList,
  );

  const handleSelected = (value) => {
    setCurrentSelected(value);
    onClick?.(value);
  };

  return (
    <div
      className={twMerge('flex flex-row w-full justify-center items-center')}
      {...getByTestId(testId, 'container')}
    >
      {paginationOption.isLimited && paginationOption.isFirstVisible && (
        <>
          <Button
            name={1}
            title={`${TEXT_TITLE_PAGE} 1`}
            onClick={() => handleSelected(0)}
            theme={0 === currentSelected ? 'blue' : 'white'}
            additionalClasses={
              'w-8 h-8 rounded-md flex justify-center items-center'
            }
          />
          {currentSelected !== 2 && <PaginationDots />}
        </>
      )}

      {paginationOption.pagination.map((item) => (
        <Button
          key={item.value}
          name={item.name}
          title={item.title}
          onClick={() => handleSelected(item.value)}
          theme={item.selected ? 'blue' : 'white'}
          additionalClasses={
            'w-8 h-8 rounded-md flex justify-center items-center'
          }
        />
      ))}

      {paginationOption.isLimited && paginationOption.isLastVisible && (
        <>
          {currentSelected + 3 !== pages && <PaginationDots />}
          <Button
            name={pages}
            title={`${TEXT_TITLE_PAGE} ${pages}`}
            onClick={() => handleSelected(pages - 1)}
            theme={pages - 1 === currentSelected ? 'blue' : 'white'}
            additionalClasses={
              'w-8 h-8 rounded-md flex justify-center items-center'
            }
          />
        </>
      )}
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  testId: PropTypes.string,
};

Pagination.defaultProps = {
  testId: '',
};
