import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { CardImgComingSoon } from '../../images';
import { getByTestId } from '../../lib/helper';
import CardDescription from './subcomponents/CardDescription/CardDescription';
import CardImages from './subcomponents/CardImages/CardImages';
import CardLink from './subcomponents/CardLink/CardLink';
import CardName from './subcomponents/CardName/CardName';
import CardTags from './subcomponents/CardTags/CardTags';
import { CardProps } from './useCard';

const Card = ({
  imgSrc,
  imgBig,
  imgAlt,
  link,
  linkName,
  linkAvailable,
  tags = [],
  desc,
  name = '',
  id,
  type,
  year,
  handleModal,
  handleSearch,

  // With test id
  testId,
}: CardProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'bg-white text-black',
        'rounded-xl relative',
        'border border-solid border-gray-100',
        'p-0 m-2 w-fit overflow-hidden relative',
        'hover:shadow-xl w-[320px] sm:w-[320px]',
        'justify-between flex flex-col',
        'h-fit',
      )}
      {...getByTestId(testId, 'container')}
    >
      <CardImages
        imgSrc={imgSrc || CardImgComingSoon}
        imgAlt={imgAlt}
        id={id}
        type={type}
        handleSearch={handleSearch}
        year={year}
        imgBig={imgBig}
        name={name}
        handleModal={handleModal}
        textOpen={t('Card.Open')}
        {...getByTestId(testId, 'card-images')}
      />

      <CardName
        header={t('Card.Name')}
        name={name}
        {...getByTestId(testId, 'card-name')}
      />

      <CardDescription
        header={t('Card.Description')}
        desc={desc}
        textOpen={t('Card.ShowMore')}
        textClose={t('Card.ShowLess')}
        {...getByTestId(testId, 'card-description')}
      />

      <CardLink
        header={t('Card.Link')}
        path={link}
        pathName={linkName}
        linkAvailable={linkAvailable}
        {...getByTestId(testId, 'card-link')}
      />

      <CardTags
        header={t('Card.Tags')}
        tags={tags}
        onClick={handleSearch}
        {...getByTestId(testId, 'card-tags')}
      />
    </div>
  );
};

export default Card;
