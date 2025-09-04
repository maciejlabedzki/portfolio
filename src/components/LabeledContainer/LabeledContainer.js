import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const LabeledContainer = ({ icon, name, children, testId }) => {
  return (
    <div
      className={twMerge(
        'relative flex xs:flex-row flex-col',
        'm-2',
        'w-full sm:w-auto justify-start',
        'w-[350px]',
      )}
      {...getByTestId(testId, 'conatiner')}
    >
      <section className="flex flex-row px-2 mb-2 sm:mb-0">
        {icon && (
          <div className={twMerge('flex justify-center items-center')}>
            {icon}
          </div>
        )}

        {name && (
          <span
            className={twMerge(
              'min-w-[90px] sm:min-w-fit',
              'mr-2 px-2',
              'flex justify-start items-center',
            )}
            {...getByTestId(testId, 'name')}
          >
            {name}
          </span>
        )}
      </section>

      {children && (
        <div
          className={twMerge(
            'relative w-fit flex',
            'justify-center items-center',
            'px-2',
          )}
          {...getByTestId(testId, 'children')}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LabeledContainer;
