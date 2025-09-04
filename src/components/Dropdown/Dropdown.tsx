import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';
import Button from '../Button/Button';
import { DropdownProps, styleAlign, styleTheme } from './useDropdown';

const Dropdown = ({
  theme = 'dark',
  themeButton = 'transparent',
  align = 'topRight',
  hasBackdrop = true,
  icon,
  name,
  additionalClasses,
  additionalBackdropClasses,
  additionalButtonClasses,
  additionalBoxClasses,
  children,

  // With test id
  testId,
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  const handleCloseOnClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={twMerge('flex relative', additionalClasses)}
      {...getByTestId(testId, 'container')}
    >
      {open && hasBackdrop && (
        <div
          onClick={handleOpenDropdown}
          className={twMerge(
            'bg-transparent fixed w-full h-full top-0 left-0 z-[99]',
            additionalBackdropClasses,
          )}
        />
      )}

      <Button
        name={name}
        icon={icon}
        theme={themeButton}
        onClick={handleOpenDropdown}
        additionalClasses={additionalButtonClasses}
      />

      {open && (
        <div
          className={twMerge(
            'flex flex-col absolute z-[100]',
            'p-2 rounded-md min-w-[150px]',
            'border mt-8 mr-1',
            styleTheme[theme],
            styleAlign[align],
            additionalBoxClasses,
          )}
          onClick={handleCloseOnClick}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
