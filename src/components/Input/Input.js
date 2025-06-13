import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Input = ({
  id,
  name,
  onChange,
  placeholder,
  value,
  type,
  error,
  label,
  testId,
  additionalClasses,
  additionalInputClasses,
  additionalLabelClasses,
}) => {
  return (
    <div className={twMerge('flex flex-col', additionalClasses)}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge('mt-0 px-0 text-sm', additionalLabelClasses)}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        className={twMerge(
          'rounded px-2 text-black min-w-[200px] focus:outline-none',
          'pr-7 border border-gray-50',
          additionalInputClasses,
        )}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        {...getByTestId(testId, 'container')}
      />

      {error && <span className="text-red mt-0 px-0 text-xs">{error}</span>}
    </div>
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
