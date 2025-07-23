import { twMerge } from 'tailwind-merge';
import { getByTestId, validTextLength } from '../../lib/helper';

const Tag = ({
  onClick,
  testId,
  maxTextLength = 15,
  additionalClasses,
  text,
}) => {
  return (
    <span
      onClick={onClick}
      className={twMerge(
        'cursor-pointer text-black text-bold m-0.5 border',
        'bg-white text-[10px] leading-none',
        'border-gray-50 rounded-full px-1.5 py-0.5',
        'flex justify-center w-fit h-[18px] hover:text-green',
        additionalClasses,
      )}
      title={text}
      {...getByTestId(testId, 'container')}
    >
      {validTextLength(text, maxTextLength, true, '...')}
    </span>
  );
};

export default Tag;
