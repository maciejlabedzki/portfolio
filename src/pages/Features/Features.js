import * as Sentry from '@sentry/react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { UserContext } from '../../contexts/UserContext';
import { FEATURES_DATA } from '../../data/features';
import { getByTestId, getSorted } from '../../lib/helper';
import FeatureItem from './subcomponents/FeatureItem';

const PageFeatures = ({ testId }) => {
  const { i18n, t } = useTranslation();
  const { isAdmin } = useContext(UserContext);
  const [features, setFeatures] = useState([]);

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: Features');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  const handleFeatures = useCallback(() => {
    let res = [];

    res = getSorted(FEATURES_DATA, 'id', 'desc');

    setFeatures(res);

    // Translate features refreshed based on update on language switch
    // eslint-disable-next-line
  }, [i18n]);

  useEffect(() => {
    handleFeatures();
  }, [handleFeatures]);

  return (
    <div
      className={twMerge(
        'w-full mt-0 flex flex-col',
        'justify-center items-center mb-8',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Features.Title')}</title>

      {isAdmin && (
        <div className="w-full bg-gray-50 py-2 flex justify-center font-bold">
          {t('Navigation.Admin')}
        </div>
      )}

      <div className="w-full bg-gray-50 py-2 flex justify-center mb-4">
        {t('Page.Features.PortfolioFeaturesList', {
          len: FEATURES_DATA.length,
        })}
      </div>

      {/* Done Features */}
      {features
        .filter((item) => item.done)
        .map((item) => (
          <FeatureItem
            key={item.id}
            done={item.done}
            name={item.name}
            type={item.type}
            typeIcon={item.hasTypeIcon}
            status={item.status}
            id={item.id}
          />
        ))}

      {/* Coming Soone */}
      {features
        .filter((item) => !item.done)
        .map((item) => (
          <FeatureItem
            key={item.id}
            done={item.done}
            name={item.name}
            type={item.type}
            typeIcon={item.hasTypeIcon}
            status={item.status}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default PageFeatures;
