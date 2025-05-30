import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Select = ({ options, value, onChange, additionalClasses, testId }) => {
  return (
    <select
      className={twMerge(
        'text-black mr-1 rounded px-2 text-md h-fit',
        additionalClasses,
      )}
      onChange={onChange}
      value={value}
      {...getByTestId(testId, 'conatiner')}
    >
      {options?.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={twMerge(
            option.value === value && 'bg-tahiti-700 text-white',
          )}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

Select.propTypes = {
  testId: PropTypes.string,
};

Select.defaultProps = {
  testId: '',
  value: '',
  options: [],
  onChange: undefined,
};
