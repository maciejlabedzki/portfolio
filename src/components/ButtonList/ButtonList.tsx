import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helpers';
import Button from '../Button/Button';
import { ButtonListProps } from './useButtonList';

const ButtonList = ({
  data,
  onClick,
  selected,
  space,
  margin,
  themeSelected,
  theme,
  additionalButtonClasses,
  additionalClasses,
  testId,
}: ButtonListProps) => {
  const [currentSeleted, setCurrentSelected] = useState(selected);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  const handleClick = (item: any) => {
    setCurrentSelected(item);
    onClick?.(item);
  };

  return (
    <div
      className={twMerge('flex flex-row', additionalClasses)}
      {...getByTestId(testId, 'container')}
    >
      {data?.map((item) => (
        <Button
          key={item?.value}
          onClick={() => handleClick(item)}
          name={item?.name}
          theme={theme}
          themeSelected={themeSelected}
          isSelected={currentSeleted?.value === item?.value}
          space={space}
          margin={margin}
          additionalClasses={additionalButtonClasses}
        />
      ))}
    </div>
  );
};

export default ButtonList;
