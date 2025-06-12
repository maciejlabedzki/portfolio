import PropTypes from 'prop-types';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import UserContext from '../../contexts/UserContext';
import { FEATURES_DATA } from '../../data/features';
import { getByTestId } from '../../lib/helper';
import FeatureItem from './subcomponents/FeatureItem';

const Features = ({ testId }) => {
  const { isAdmin } = useContext(UserContext);

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

      {FEATURES_DATA.map((item) => (
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

export default Features;

Features.propTypes = {
  testId: PropTypes.string,
};

Features.defaultProps = {
  testId: '',
};
