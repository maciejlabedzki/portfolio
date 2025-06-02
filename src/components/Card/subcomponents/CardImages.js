import {
  ArrowPathRoundedSquareIcon,
  GlobeAltIcon,
  PencilIcon,
  PhotoIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { LightBulbIcon, PuzzlePieceIcon } from '../../../images';
import { getByTestId } from '../../../lib/helper';
import Loader from '../../Loader/Loader';
import StatusPill from '../../StatusPill/StatusPill';

const CardImages = ({
  imgSrc,
  imgBig,
  imgAlt,
  id,
  name,
  handleSearch,
  type,
  year,
  testId,
  handleModal,
  textOpen,
}) => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = useState(false);

  const validTypeIcon = (value) => {
    if (value === 'website') {
      return <GlobeAltIcon className="w-4 h-4" />;
    } else if (value === 'widget') {
      return <PuzzlePieceIcon className="w-4 h-4" />;
    } else if (value === 'design') {
      return <PencilIcon className="w-4 h-4" />;
    } else if (value === 'tool') {
      return <WrenchIcon className="w-4 h-4" />;
    } else if (value === 'animation') {
      return <ArrowPathRoundedSquareIcon className="w-4 h-4" />;
    } else {
      return <LightBulbIcon className="w-4 h-4" />;
    }
  };

  const handleImageOpen = () => {
    handleModal?.({ imgBig, imgAlt, name });
  };

  return (
    <div
      className={twMerge(
        'group relative',
        'h-[220px] justify-center',
        'p-3 items-center flex',
      )}
      {...getByTestId(testId, 'container')}
    >
      {year && (
        <StatusPill
          text={year}
          title={t('Card.Year', { year })}
          additionalClasses={twMerge(
            'absolute z-30 top-[-5px] left-[50%]',
            'ml-[-30px] px-2 w-[60px] border-gray-100',
            'border-0 rounded-b-lg rounded-t-none ',
            'bg-tahiti-100  ',
          )}
          {...getByTestId(testId, 'year')}
        />
      )}

      {id && (
        <StatusPill
          text={id}
          title={t('Card.ID', { id })}
          additionalClasses={twMerge(
            'absolute z-30 top-0 left-0 bg-white border border-gray',
          )}
          {...getByTestId(testId, 'id')}
        />
      )}

      {type && (
        <StatusPill
          text={validTypeIcon(type)}
          title={t('Card.Type', { type })}
          onClick={() => handleSearch(type, 'type')}
          additionalClasses={twMerge(
            'absolute cursor-pointer',
            'hover:opacity-80 z-30 top-1 right-1',
          )}
          {...getByTestId(testId, 'type')}
        />
      )}

      {imgBig && (
        <div
          className={twMerge(
            'bg-black w-full h-full absolute z-10',
            'justify-center items-center flex text-white flex-col',
            'opacity-0 hover:opacity-50 cursor-pointer',
          )}
          onClick={handleImageOpen}
        >
          <PhotoIcon className="w-6 h-6 text-white" />
          {textOpen}
        </div>
      )}

      {!imgLoaded && <Loader />}

      <img
        className="rounded-xl max-w-[200px]"
        src={imgSrc}
        alt={imgAlt}
        onLoad={() => setImgLoaded(true)}
        {...getByTestId(testId, 'images')}
      />
    </div>
  );
};

export default CardImages;

CardImages.propTypes = {
  testId: PropTypes.string,
};

CardImages.defaultProps = {
  testId: '',
  textOpen: '',
};
