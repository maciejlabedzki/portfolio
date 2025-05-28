import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';
import Button from '../Button/Button';

const DotPlaceholder = () => {
  return (
    <span
      className={twMerge(
        'w-4 h-4 flex justify-center items-center text-gray-50',
      )}
    >
      ...
    </span>
  );
};

const Pagination = ({ pages, onClick, selected, testId }) => {
  const [currentSelected, setCurrentSelected] = useState(selected);
  if (pages <= 1) return;

  const paginationList = [];

  for (let i = 1; i <= pages; i++) {
    paginationList.push({
      value: i,
      title: 'Page ' + i,
      selected: i === currentSelected,
    });
  }

  const pagMin = currentSelected - 3 > 0 ? currentSelected - 3 : 0;
  const pagMax = currentSelected + 2 > pages ? pages : currentSelected + 2;
  const isLastVisible = pages > pagMax;
  const isFirstVisible = 1 < pagMin + 1;
  const pagLimited = paginationList.slice(pagMin, pagMax);
  const isLimited = pages > 5;
  const pagination = isLimited ? pagLimited : paginationList;

  const handleSelected = (value) => {
    setCurrentSelected(value);
    onClick?.(value);
  };

  return (
    <div
      className={twMerge('flex flex-row w-full justify-center items-center')}
      {...getByTestId(testId, 'container')}
    >
      {isFirstVisible && (
        <>
          <Button
            name={1}
            title={'Page ' + 1}
            onClick={() => handleSelected(1)}
            theme={1 === currentSelected ? 'blue' : 'white'}
            additionalClasses={
              'w-8 h-8 rounded-md flex justify-center items-center'
            }
          />
          {currentSelected !== 3 && <DotPlaceholder />}
        </>
      )}

      {pagination.map((item) => (
        <Button
          key={item.value}
          name={item.value}
          title={item.title}
          onClick={() => handleSelected(item.value)}
          theme={item.selected ? 'blue' : 'white'}
          additionalClasses={
            'w-8 h-8 rounded-md flex justify-center items-center'
          }
        />
      ))}

      {isLastVisible && (
        <>
          {currentSelected + 3 !== pages && <DotPlaceholder />}
          <Button
            name={pages}
            title={'Page ' + pages}
            onClick={() => handleSelected(pages)}
            theme={pages === currentSelected ? 'blue' : 'white'}
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
