import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../../components';
import { ChevronDownIcon, ChevronUpIcon } from '../../../images';
import { getByTestId, validTextLength } from '../../../lib/helper';

const CardDescription = ({
  desc = '',
  header = '',
  textOpen = '',
  textClose = '',
  testId,
}) => {
  const [readMore, setReadMore] = useState(false);

  if (!desc) {
    return;
  }

  const MAX_VALUE_LENGTH = 80;
  const isTextLong = desc?.length > MAX_VALUE_LENGTH;

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <p
      className={twMerge(
        'px-2 text-sm py-4',
        'border-t border-gray-100 border-solid',
        'relative min-h-[80px]',
      )}
      {...getByTestId(testId, 'container')}
    >
      {header && (
        <span
          className={twMerge(
            'text-[9px] lowercase px-2 font-bold m-0 px-2 py-0 w-fit mb-2 text-black',
            'absolute bg-red rounded-full ml-2 left-0 top-[-8px] border border-gray-50',
            'bg-white h-[15px] leading-none flex justify-center items-center',
          )}
          {...getByTestId(testId, 'header')}
        >
          {header}
        </span>
      )}

      <span
        className="text-sm text-black"
        {...getByTestId(testId, 'description')}
      >
        {validTextLength(desc, MAX_VALUE_LENGTH, !readMore)}
      </span>

      {isTextLong && (
        <Button
          name={readMore ? textClose : textOpen}
          theme="secondary"
          space="none"
          icon={
            readMore ? (
              <ChevronUpIcon
                className={twMerge('h-4 w-4', textClose && 'mr-1')}
              />
            ) : (
              <ChevronDownIcon
                className={twMerge('h-4 w-4', textOpen && 'mr-1')}
              />
            )
          }
          onClick={handleReadMore}
          additionalClasses={'absolute top-[-15px] right-[6px] px-2'}
        />
      )}
    </p>
  );
};

export default CardDescription;
