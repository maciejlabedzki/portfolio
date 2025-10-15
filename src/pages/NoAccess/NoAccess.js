import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useCallback, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import { UserContext } from '../../contexts/UserContext';
import { getByTestId } from '../../lib/helper';

const PageNoAccess = ({ testId }) => {
  const { t } = useTranslation();
  const { isAdmin, updateUserContext } = useContext(UserContext);
  const [loginAdmin, setLoginAdmin] = useState('');
  const [passAdmin, setPassAdmin] = useState('');

  const handleUpdateAdmin = useCallback(() => {
    if (!process.env.REACT_APP_ADMIN_LOGIN) {
      toast.error('Missing configuration for admin login');
      return;
    } else if (!process.env.REACT_APP_ADMIN_PASS) {
      toast.error('Missing configuration for admin password');
      return;
    }

    if (
      loginAdmin === process.env.REACT_APP_ADMIN_LOGIN &&
      passAdmin === process.env.REACT_APP_ADMIN_PASS
    ) {
      updateUserContext?.((prevState) => ({
        ...prevState,
        isAdmin: true,
      }));
    } else {
      toast.error('Wrong password');
    }
  }, [updateUserContext, passAdmin, loginAdmin]);

  const handleLoginAdmin = (e) => {
    setLoginAdmin(e.target.value);
  };

  const handlePassAdmin = (e) => {
    setPassAdmin(e.target.value);
  };

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.NoAccess.Title')}</title>

      <ExclamationTriangleIcon className="w-20 h-20 text-black-400" />

      <span className="text-sm mb-6">{t('Page.NoAccess.Header')}</span>

      {!isAdmin && (
        <div className={'flex flex-col justify-center items-center my-4'}>
          <div className={'flex-row justify-center items-center'}>
            <Input
              value={loginAdmin}
              onChange={handleLoginAdmin}
              additionalClasses="my-2"
              placeholder="Login"
            />
            <Input
              value={passAdmin}
              onChange={handlePassAdmin}
              additionalClasses="my-2"
              placeholder="Password"
            />
          </div>
          <Button name="Login as Admin" onClick={handleUpdateAdmin} />
        </div>
      )}

      <NavigationLink
        to="/"
        name={t('Page.404.BackToHomePage')}
        additionalClasses={twMerge(
          'rounded-md px-2 py-2 bg-tahiti-700 hover:opacity-90',
        )}
      />
    </div>
  );
};

export default PageNoAccess;
