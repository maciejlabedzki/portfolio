import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { NavigationLink } from '../../components';
import { getByTestId } from '../../lib/helper';

const PageNoAccess = ({ testId }) => {
  const { t } = useTranslation();

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

      <span className="text-sm mb-0">{t('Page.NoAccess.Header')}</span>

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
