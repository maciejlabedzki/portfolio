import * as Sentry from '@sentry/react';
import { useCallback, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Loader from '../../components/Loader/Loader';
import { UserContext } from '../../contexts/UserContext';
import { getUrl } from '../../lib/fetch';
import { getByTestId } from '../../lib/helper';
import FeatureItem from './subcomponents/FeatureItem';

const PageFeatures = ({ testId }) => {
  const { t } = useTranslation();
  const { isAdmin } = useContext(UserContext);
  const [features, setFeatures] = useState([]);
  const [featuresLoading, setFeaturesLoading] = useState(true);
  const CONTENT_TYPE = 'features';
  const FETCH_ORDER = '-fields.id';

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: Features');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  const fetchFeaturesData = useCallback(async () => {
    try {
      const url = getUrl({
        contentType: CONTENT_TYPE,
        order: FETCH_ORDER,
      });

      const res = await fetch(url);

      if (!res.ok) throw new Error('Błąd w zapytaniu');

      const data = await res.json();

      const featuresList = data.items.map((item) => {
        return { ...item.fields };
      });

      setFeatures(featuresList);
      setFeaturesLoading(false);
    } catch (err) {
      toast.error(`Error on fetch features data.`);
      setFeaturesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeaturesData();
  }, [fetchFeaturesData]);

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

      {featuresLoading ? (
        <Loader theme="dark" additionalClasses="m-auto pt-4 pb-4" />
      ) : (
        <div
          className={twMerge(
            'w-full bg-white py-2 flex justify-center mb-4',
            features?.length && 'bg-gray',
          )}
        >
          {features?.length > 0
            ? t('Page.Features.PortfolioFeaturesList', {
                len: features?.length,
              })
            : t('Page.Features.NoData')}
        </div>
      )}

      {/* Section: Features */}
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

      {/* Section: Coming Soon */}
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
