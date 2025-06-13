import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import UserContext from '../../contexts/UserContext';
import { FEATURES_DATA } from '../../data/features';
import { getByTestId, getSorted } from '../../lib/helper';
import FeatureItem from './subcomponents/FeatureItem';

const PageFeatures = ({ testId }) => {
  const { i18n } = useTranslation();
  const { isAdmin } = useContext(UserContext);
  const [features, setFeatures] = useState([]);

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
      {isAdmin && (
        <div className="w-full bg-gray-50 py-2 flex justify-center font-bold">
          [ Admin ]
        </div>
      )}

      <div className="w-full bg-gray-50 py-2 flex justify-center mb-4">
        {`Portfolio Features List (${FEATURES_DATA.length})`}
      </div>

      {features.map((item) => (
        <FeatureItem
          key={item.id}
          done={item.done}
          name={item.name}
          type={item.type}
          status={item.status}
          icon={item.isIconByType}
        />
      ))}
    </div>
  );
};

export default PageFeatures;

PageFeatures.propTypes = {
  testId: PropTypes.string,
};

PageFeatures.defaultProps = {
  testId: '',
};
