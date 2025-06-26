import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';
import Button from '../Button/Button';

const Dropdown = ({
  testId,
  theme,
  align,
  icon,
  name,
  hasBackdrop,
  additionalClasses,
  children,
}) => {
  const [open, setOpen] = useState();

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  const handleCloseOnClick = () => {
    setOpen(false);
  };

  const styleTheme = {
    dark: ' bg-black-300 text-white border-gray',
    light: ' bg-white text-black',
  };

  const styleAlign = {
    topRight: 'sm:top-0 sm:right-0',
    topLeft: 'sm:top-0 sm:left-0',
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
          )}
        />
      )}

      <Button
        name={name}
        icon={icon}
        theme="transparent"
        onClick={handleOpenDropdown}
      />

      {open && (
        <div
          className={twMerge(
            'flex flex-col absolute z-[100]',
            'p-2 rounded-md min-w-[150px]',
            'border mt-6 ',
            styleTheme[theme],
            styleAlign[align],
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

Dropdown.propTypes = {
  testId: PropTypes.string,
};

Dropdown.defaultProps = {
  testId: '',
  theme: 'dark',
  align: 'topRight',
  hasBackdrop: true,
};
