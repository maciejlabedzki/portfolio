import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { getByTestId } from '../lib/helper';
import {
  Cookies,
  Footer,
  Navigation,
  OwnerDetails,
  ScrollToTop,
  Welcome,
} from '../section/index';

const Layout = ({ testId, children }) => {
  const { t } = useTranslation();
  const { userStorage } = useContext(UserContext);

  return (
    <div
      className="flex flex-col w-full min-h-[100vh] overflow-hidden"
      {...getByTestId(testId, 'container')}
    >
      <OwnerDetails data={userStorage} />

      <Navigation />

      <Welcome header={t('Welcome.Header')} desc={t('Welcome.Desc')} />

      <div className="w-full"> {children ? children : <Outlet />}</div>

      <Footer />

      <Cookies />

      <ScrollToTop />

      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
