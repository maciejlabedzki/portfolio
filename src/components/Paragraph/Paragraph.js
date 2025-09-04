import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Paragraph = ({
  icon,
  name,
  title,
  testId,
  onClick,
  additionalClass,
  additionalNameClass,
  additionalIconClass,
}) => {
  return (
    <p
      className={twMerge(
        'bg-black-200 flex flex-inline',
        'justify-start items-center',
        'text-white my-1 px-2',
        additionalClass,
      )}
      onClick={onClick}
      {...getByTestId(testId, 'container')}
    >
      {icon && (
        <span
          className={twMerge(
            'mx-1 min-w-[10px] w-2 md:w-3',
            additionalIconClass,
          )}
        >
          {icon}
        </span>
      )}
      {name && (
        <span
          className={twMerge('text-sm md:text-md', additionalNameClass)}
          title={title || name}
        >
          {name}
        </span>
      )}
    </p>
  );
};

export default Paragraph;
