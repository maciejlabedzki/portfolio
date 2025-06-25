import { t } from 'i18next';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, XMarkIcon } from '../../../images';
import { getByTestId, getIconFeaturePattern } from '../../../lib/helper';

const FeatureItem = ({ name, icon, done, status, type, id, testId }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col sm:flex-row justify-center items-center',
        'border border-gray-50 m-2 px-0 pr-0 py-0 rounded-md',
        'w-[90%] max-w-[800px] justify-start hover:opacity-80',
        'overflow-hidden rounded-md',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="flex flex-row w-full sm:w-fit sm:flex-row">
        <span
          className={twMerge(
            'mr-0 px-2 py-2  w-[33%] ',
            'items-center flex justify-center sm:w-fit',
            'bg-gray',
            done && 'bg-green',
          )}
        >
          {done ? (
            <CheckIcon className="text-white w-5 h-5" />
          ) : (
            <XMarkIcon className="text-white w-5 h-5 mt-0.5" />
          )}
        </span>

        {type && (
          <span
            className={twMerge(
              'flex justify-center items-center',
              'px-2 h-10 mr-0 pr-2 pr-3 py-2 w-[34%] ',
              'items-center flex justify-center sm:justify-start',
              'sm:w-fit min-w-[130px]',
              'bg-blue text-white',
            )}
          >
            {icon && getIconFeaturePattern(type)} {type}
          </span>
        )}

        {status && (
          <span
            className={twMerge(
              'flex justify-center items-center',
              'px-2 h-10 min-w-[50px]',
              'mr-0 px-2 py-2 w-[33%]',
              'items-center flex justify-center sm:w-fit',
              'bg-orange text-white',
            )}
          >
            {status}
          </span>
        )}
      </div>

      <span
        className={twMerge(
          'justify-center items-center',
          'px-2 py-1 min-h-9 font-bold',
          'text-sm line-clamp-none sm:line-clamp-1',
        )}
        title={name}
      >
        {name}
      </span>

      {!done && (
        <span
          className={twMerge(
            'flex justify-center items-center',
            'px-2 py-1 min-h-9 leading-none',
            'text-green',
          )}
        >
          {t('Global.ComingSoon')}
        </span>
      )}
    </div>
  );
};

export default FeatureItem;

FeatureItem.propTypes = {
  testId: PropTypes.string,
};

FeatureItem.defaultProps = {
  testId: '',
};
