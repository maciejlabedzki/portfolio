import { t } from 'i18next';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, XMarkIcon } from '../../../images';
import { getByTestId, getIconFeaturePattern } from '../../../lib/helper';

const FeatureItem = ({
  name,
  iconDone = <CheckIcon className="text-green w-5 h-5" />,
  iconUndone = <XMarkIcon className="text-gray w-5 h-5 mt-0.5" />,
  done,
  status,
  type,
  typeIcon = false,
  textDone = t('Global.ComingSoon'),
  id,
  testId,
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col sm:flex-row justify-center items-center',
        'border border-gray-100 m-2 px-0 pr-0 py-0 rounded-md',
        'w-[90%] max-w-[800px] justify-start hover:opacity-80',
        'overflow-hidden rounded-md shadow-sm hover:shadow-none',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div
        className={twMerge(
          'flex flex-row w-full sm:w-fit sm:flex-row',
          'border-b border-gray-100 sm:border-none',
        )}
      >
        <span
          className={twMerge(
            'mr-0 px-2 py-2  w-[33%] ',
            'items-center flex justify-center sm:w-fit',
            'bg-white text-green',
            // done && 'bg-green',
          )}
        >
          {done ? iconDone : iconUndone}
        </span>

        {type && (
          <span
            className={twMerge(
              'flex justify-center items-center',
              'px-2 h-10 mr-0 pr-2 pr-3 py-2 w-[34%] ',
              'items-center flex justify-center sm:justify-start',
              'sm:w-fit min-w-[130px]',
              'bg-white text-blue border-l border-gray-100',
            )}
          >
            {typeIcon && (
              <span className="text-blue">{getIconFeaturePattern(type)}</span>
            )}
            {type}
          </span>
        )}

        {status && (
          <span
            className={twMerge(
              'flex justify-center items-center',
              'px-2 h-10 min-w-[50px]',
              'mr-0 px-2 py-2 w-[33%]',
              'items-center flex justify-center sm:w-fit',
              'bg-white text-black text-sm',
              'md:border-r border-l border-gray-100',
            )}
            title="Status"
          >
            {status}
          </span>
        )}
      </div>

      {id && (
        <span
          className={twMerge(
            'justify-center items-center',
            'min-w-[50px]',
            'items-center flex justify-center',
            'text-xs font-normal mr-1',
            'md:border-r md:border-gray-100',
            'border-gray-100 border-b sm:border-b-0',
            'h-4 md:h-10',
            'w-full sm:w-fit',
          )}
          title="Id number"
        >
          {id}
        </span>
      )}

      {name && (
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
      )}

      {!done && (
        <span
          className={twMerge(
            'flex justify-center items-center',
            'px-2 py-1 min-h-9 leading-none',
            'text-green text-sm',
          )}
        >
          {textDone}
        </span>
      )}
    </div>
  );
};

export default FeatureItem;
