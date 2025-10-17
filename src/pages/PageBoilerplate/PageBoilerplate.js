import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const PageBoilerplate = ({ testId }) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Boilerplate.Title')}</title>
      <div>{t('Page.Boilerplate.Header')}</div>
    </div>
  );
};

export default PageBoilerplate;
