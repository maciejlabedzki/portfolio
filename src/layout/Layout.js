import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Button } from '../components';
import UserContext from '../contexts/UserContext';
import { ArrowUpIcon } from '../images';
import { getByTestId } from '../lib/helper';
import Cookies from '../section/Cookies/Cookies';
import { Footer, Navigation, OwnerDetails, Welcome } from '../section/index';

const Layout = ({ testId, children }) => {
  const { t } = useTranslation();
  const { userStorage } = useContext(UserContext);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

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

      <Button
        icon={<ArrowUpIcon className="w-5 h-5" />}
        onClick={handleScrollTop}
        radius="full"
        additionalClasses={
          'w-5 h-5 p-4 sm:p-8 z-[100] fixed bg-tahiti-600 text-white ' +
          'bottom-0 sm:bottom-10 right-0 sm:right-5'
        }
        title={t('Global.ScrollTop')}
      />

      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
