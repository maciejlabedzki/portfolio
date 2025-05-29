import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Link = ({ name, target, rel, linkPath, additionalClasses, testId }) => {
  return (
    <a
      className={twMerge(
        'bg-black-300 flex flex-inline',
        'justify-start items-center',
        'text-white my-1 px-2 hover:text-gray-50',
        additionalClasses,
      )}
      href={linkPath}
      title={linkPath}
      target={target}
      rel={rel}
      {...getByTestId(testId, 'container')}
    >
      {name}
    </a>
  );
};

export default Link;

Link.propTypes = {
  testId: PropTypes.string,
};

Link.defaultProps = {
  testId: '',
  name: '',
  href: '',
  title: '',
  target: '_blank',
  rel: 'noopener noreferrer',
  additionalClasses: '',
};
