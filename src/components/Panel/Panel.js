import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Panel = ({
  icon,
  name,
  testId,
  additionalClasses,
  additionalClassesLabel,
  additionalClassesIcon,
  additionalClassesName,
  children,
}) => {
  return (
    <div
      className={twMerge(
        'w-[90%] mt-2 flex flex-col p-4 rounded-xl relative',
        'justify-center items-center m-4 pt-8 pb-8',
        'border border-gray-50',
        additionalClasses,
      )}
      {...getByTestId(testId, 'container')}
    >
      {(name || icon) && (
        <span
          className={twMerge(
            'mb-4 mt-2 flex flex-row justify-center items-center',
            'font-bold bg-white px-2 pr-3 absolute top-[-20px]',
            'border border-gray-50 rounded-xl',
            additionalClassesLabel,
          )}
        >
          {icon && (
            <span className={twMerge('', additionalClassesIcon)}>{icon}</span>
          )}
          {name && (
            <span className={twMerge('', additionalClassesName)}>{name}</span>
          )}
        </span>
      )}
      {children}
    </div>
  );
};

export default Panel;
