import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../../lib/helper';

const CardName = ({ name, header, testId }) => {
  if (!name) {
    return;
  }

  return (
    <div
      className={twMerge(
        'text-sm font-bold px-3 py-4 relative bg-white w-full',
        'border-t border-gray-100',
      )}
      {...getByTestId(testId, 'container')}
    >
      {header && (
        <label
          className={twMerge(
            'text-[9px] lowercase font-bold m-0 px-2 py-0 w-fit mb-2 text-black',
            'absolute rounded-full ml-2 left-0 top-[-8px] border border-gray-50',
            'bg-white h-[15px] leading-none flex justify-center items-center bg-white z-40',
          )}
          {...getByTestId(testId, 'label')}
        >
          {header}
        </label>
      )}
      <span {...getByTestId(testId, 'name')}>{name}</span>
    </div>
  );
};

export default CardName;

CardName.propTypes = {
  testId: PropTypes.string,
};

CardName.defaultProps = {
  testId: '',
  header: '',
  name: '',
};
