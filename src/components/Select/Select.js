import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { getByTestId, getSorted } from '../../lib/helper';

const Select = ({
  options = [],
  value,
  onChange,
  additionalClasses,
  sorted = false,
  translated,
  translateKey,
  testId,
  id,
  name,
}) => {
  const { t } = useTranslation();
  const [val, setVal] = useState(value);
  const [currentOptions, setCurrentOptions] = useState(options);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleValidate = useCallback(() => {
    if (translated || sorted) {
      let resOptions;

      if (translated && translateKey) {
        resOptions = options?.map((item) => {
          return { ...item, name: t(`${translateKey}.${item.name}`) };
        });
      }

      if (sorted) {
        resOptions = getSorted(resOptions, 'name', 'asc');
      }

      setCurrentOptions(resOptions);
    }
  }, [sorted, translated, t, options, translateKey]);

  useEffect(() => {
    handleValidate();
  }, [handleValidate]);

  return (
    <select
      name={name}
      id={id}
      className={twMerge(
        'text-black mr-1 rounded px-2 text-md h-fit',
        additionalClasses,
      )}
      onChange={onChange}
      value={val}
      {...getByTestId(testId, 'conatiner')}
    >
      {currentOptions?.map((option) => (
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
