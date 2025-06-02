import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Link } from '../../components';
import { getByTestId } from '../../lib/helper';

const Navigation = ({ testId }) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'bg-black-300 flex flex-col',
        'sm:flex-row justify-between',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Link
        name={t('Navigation.Home')}
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
