import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { CODE_DATA } from '../../data/code';
import { getByTestId } from '../../lib/helper';

const Code = ({ testId }) => {
  return (
    <div
      className={twMerge(
        'bg-black-300  px-2 py-3 w-full',
        'justify-center items-center',
        'border-black-400 border-1 border-t',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="flex flex-wrap sm:flex-row max-w-[620px] m-auto">
        {CODE_DATA?.map((code) => (
          <img
            src={code.icon}
            alt={code.name}
            title={code.name}
            key={code.id}
            className={twMerge(
              'h-10 sm:h-20 w-10 sm:w-20 m-1 hover:opacity-80',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Code;

Code.propTypes = {
  testId: PropTypes.string,
};

Code.defaultProps = {
  testId: '',
};
