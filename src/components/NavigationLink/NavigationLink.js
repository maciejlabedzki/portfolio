import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const NavigationLink = ({
  name,
  linkPath,
  active,
  additionalClasses,
  testId,
}) => {
  return (
    <Link
      className={twMerge(
        'bg-black-300 flex flex-inline',
        'justify-start items-center',
        'text-white my-1 px-2 hover:text-gray-50',
        active && 'bg-black-200',
        additionalClasses,
      )}
      title={linkPath}
      to={linkPath}
      {...getByTestId(testId, 'conatiner')}
    >
      {name}
    </Link>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  testId: PropTypes.string,
};

NavigationLink.defaultProps = {
  name: '',
  linkPath: '',
  additionalClasses: '',
  testId: '',
  active: false,
};
