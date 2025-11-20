import * as Sentry from '@sentry/react';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const PageAboutMe = ({ testId }) => {
  const { t } = useTranslation();

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: About Me');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.AboutMe.Title')}</title>
      <div>{t('Page.AboutMe.Header')}</div>
    </div>
  );
};

export default PageAboutMe;
