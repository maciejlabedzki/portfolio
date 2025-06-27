import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import LoginForm from '../../forms/LoginForm/LoginForm';
import { getByTestId } from '../../lib/helper';

const PageLogin = ({ testId }) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Login.Title')}</title>

      <LoginForm />
    </div>
  );
};

export default PageLogin;

PageLogin.propTypes = {
  testId: PropTypes.string,
};

PageLogin.defaultProps = {
  testId: '',
};
