import * as Sentry from '@sentry/react';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const PageCertyficate = ({ testId }) => {
  const { t } = useTranslation();

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: Certyficate');
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
      <title>{t('Page.Certyficate.Title')}</title>
      <div>{t('Page.Certyficate.Header')}</div>
    </div>
  );
};

export default PageCertyficate;
