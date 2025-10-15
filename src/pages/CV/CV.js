import * as Sentry from '@sentry/react';
import { useCallback, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/Button/Button';
import Panel from '../../components/Panel/Panel';
import Paragraph from '../../components/Paragraph/Paragraph';
import { UserContext } from '../../contexts/UserContext';
import { imgCV, UserIcon } from '../../images';
import { getByTestId } from '../../lib/helper';

const PageCV = ({ testId }) => {
  const { t } = useTranslation();
  const { userStorage } = useContext(UserContext);

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: CV');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  const handleOpenCV = () => {
    if (userStorage?.cv) {
      window.open(userStorage.cv, 'blank');
    }
  };

  const handleDownloadCV = () => {
    if (userStorage?.cvDownload) {
      window.open(userStorage.cvDownload, 'blank');
    }
  };

  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col mb-4',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Panel
        name={t('Page.CV.Title')}
        icon={<UserIcon className="h-4 w-4 mr-2 text-gray" />}
        additionalClasses={'bg-black-200'}
      >
        <div className="flex flex-row">
          <Button
            name={t('Page.CV.DownloadCV')}
            onClick={handleDownloadCV}
            disabled={!userStorage?.cvDownload}
            title={'CV Download Link'}
          />
          <Button
            name={t('Page.CV.OpenCV')}
            onClick={handleOpenCV}
            disabled={!userStorage?.cv}
            title={'CV Open Link'}
          />
        </div>

        {imgCV && (
          <>
            <Paragraph
              additionalNameClass="text-sm mb-5"
              name={t('Page.CV.Header')}
            />
            <img src={imgCV} alt="CV Images" />
          </>
        )}
      </Panel>
    </div>
  );
};

export default PageCV;
