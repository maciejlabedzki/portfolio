import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useCallback, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import { UserContext } from '../../contexts/UserContext';
import AdminForm from '../../forms/AdminForm/AdminForm';
import { getByTestId } from '../../lib/helper';
import { getLocalStorage } from '../../lib/localstorage';

const PageNoAccess = ({ testId }) => {
  const { t } = useTranslation();
  const { isAdmin, updateUserContext } = useContext(UserContext);

  const validateAdminFromLocalstorage = useCallback(() => {
    const isAdminLS = getLocalStorage('userRoleAdmin', true);

    if (isAdminLS) {
      updateUserContext?.((prevState) => ({
        ...prevState,
        isAdmin: true,
      }));
    }
  }, [updateUserContext]);

  useEffect(() => {
    validateAdminFromLocalstorage();
  }, [validateAdminFromLocalstorage]);

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

      <NavigationLink
        to="/"
        name={t('Page.404.BackToHomePage')}
        additionalClasses={twMerge(
          'rounded-md px-2 py-2 bg-tahiti-700 hover:opacity-90',
        )}
      />

      {!isAdmin && <AdminForm />}
    </div>
  );
};

export default PageNoAccess;
