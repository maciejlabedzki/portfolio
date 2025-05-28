import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Input = ({ onChange, placeholder, value, testId }) => {
  return (
    <input
      className={twMerge(
        'rounded px-2 text-black min-w-[200px] focus:outline-none',
        'pr-7',
      )}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...getByTestId(testId, 'container')}
    />
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
  radius: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  testId: '',
  radius: 'normal',
};
