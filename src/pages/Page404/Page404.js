import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import { getByTestId } from '../../lib/helper';

const Page404 = ({ testId }) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.404.Title')}</title>

      <ExclamationTriangleIcon className="w-20 h-20 text-black-400" />

      <span className="text-xl font-bold mb-2">{t('Page.404.Header')}</span>
      <span className="text-sm mb-0">{t('Page.404.WrongURLAdress')}</span>
      <span className="text-sm text-blue mt-2 mb-20">
        {window.location.href}
      </span>

      <NavigationLink
        linkPath="/"
        name={t('Page.404.BackToHomePage')}
        additionalClasses={twMerge(
          'rounded-md px-2 py-2 bg-tahiti-700 hover:opacity-90',
        )}
      />
    </div>
  );
};

export default Page404;
