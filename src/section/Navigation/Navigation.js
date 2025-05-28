import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { Link } from '../../components';
import { LANGUAGE_DATA } from '../../data/langEn';
import { getByTestId } from '../../lib/helper';

const Navigation = ({ testId }) => {
  return (
    <div
      className={twMerge(
        'bg-black-300 flex flex-col sm:flex-row justify-between',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Link
        name={LANGUAGE_DATA['Home']}
        linkPath={'/'}
        target={'_self'}
        additionalClasses={'w-fit'}
      />
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  testId: PropTypes.string,
};

Navigation.defaultProps = {
  testId: '',
};
