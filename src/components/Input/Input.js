import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';
import Button from '../Button/Button';

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
  autocomplete,
  hasClear,
  onClear,
  additionalClasses,
  additionalInputClasses,
  additionalLabelClasses,
  isRequired,
}) => {
  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleOnChange = (e) => {
    setCurrentValue(e.target.value);
    onChange(e);
  };

  const handleOnClear = () => {
    setCurrentValue('');
    onClear?.();
  };

  return (
    <div className={twMerge('flex flex-col  ', additionalClasses)}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge('mt-0 px-0 text-sm', additionalLabelClasses)}
        >
          {label}
          {isRequired && <span className="text-red ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          name={name}
          className={twMerge(
            'rounded px-2 text-black min-w-[250px] sm:min-w-[300px] focus:outline-none',
            'border border-gray-50 text-sm h-6',
            hasClear && 'pr-7 truncate',
            additionalInputClasses,
          )}
          onChange={handleOnChange}
          value={currentValue}
          placeholder={placeholder}
          type={type}
          autoComplete={autocomplete}
          {...getByTestId(testId, 'container')}
        />

        {hasClear && (
          <Button
            name="X"
            theme="transparent"
            title={t('Section.Search.ClearButton')}
            onClick={handleOnClear}
            margin="none"
            space="none"
            radius="full"
            hover="fade"
            type="button"
            additionalClasses={twMerge(
              'absolute right-1 top-1',
              'w-5 h-5',
              'bg-gray-100 text-gray',
            )}
          />
        )}
      </div>

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
  autocomplete: 'false',
  hasClear: false,
};
