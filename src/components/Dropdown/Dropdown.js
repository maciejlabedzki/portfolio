import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Dropdown = ({ testId, icon, name, children }) => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={twMerge('flex relative')}>
      <div onClick={handleOpen} className="flex flex-row">
        <span>{icon}</span>
        <span> {name}</span>
      </div>

      {open && (
        <div className="flex flex-col absolute top-0 left-0 z-90">
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
};
