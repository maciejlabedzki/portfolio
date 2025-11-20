import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const NavigationLink = ({
  name,
  linkPath,
  active = false,
  additionalClasses,
  testId,
  hidden,
}) => {
  return (
    <Link
      className={twMerge(
        'bg-black-300 flex flex-inline',
        'justify-start items-center whitespace-nowrap',
        'text-white my-1 px-2 hover:text-gray-50',
        active && 'bg-black-200',
        hidden && 'hidden',
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
