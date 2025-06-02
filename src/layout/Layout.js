import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Button } from '../components';
import { USER_DATA } from '../data/user';
import { ArrowUpIcon } from '../images';
import { getByTestId } from '../lib/helper';
import { Footer, Navigation, OwnerDetails, Welcome } from '../section/index';

const Layout = ({ testId, children }) => {
  const { t } = useTranslation();
  const [userData] = useState(USER_DATA);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="flex flex-col w-full min-h-[100vh]"
      {...getByTestId(testId, 'container')}
    >
      <OwnerDetails data={userData} />

      <Navigation />

      <Welcome header={t('Welcome.Header')} desc={t('Welcome.Desc')} />

      <div className="w-full"> {children ? children : <Outlet />}</div>

      <Footer />

      <Button
        icon={<ArrowUpIcon className="w-5 h-5" />}
        onClick={handleScrollTop}
        radius={'full'}
        additionalClasses={
          'w-5 h-5 p-4 sm:p-8 z-[100] fixed ' +
          'bottom-0 sm:bottom-10 right-0 sm:right-5'
        }
        title={t('Global.ScrollTop')}
      />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  testId: PropTypes.string,
};

Layout.defaultProps = {
  testId: '',
};
