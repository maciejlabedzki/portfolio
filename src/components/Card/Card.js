import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { LANGUAGE_DATA } from '../../data/langEn';
import { Placeholder2 } from '../../images';
import { getByTestId } from '../../lib/helper';
import {
  CardDescription,
  CardImages,
  CardLink,
  CardName,
  CardTags,
} from './subcomponents/index';

const Card = ({
  imgSrc,
  imgBig,
  imgAlt,
  link,
  linkName,
  linkAvailable,
  tags,
  desc,
  name,
  id,
  type,
  year,
  handleModal,
  handleSearch,
  testId,
}) => {
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
      <section>
        <CardImages
          imgSrc={imgSrc || Placeholder2}
          imgAlt={imgAlt}
          id={id}
          type={type}
          handleSearch={handleSearch}
          year={year}
          imgBig={imgBig}
          name={name}
          handleModal={handleModal}
          textOpen={LANGUAGE_DATA['Open']}
          {...getByTestId(testId, 'card-images')}
        />

        <CardName
          header={LANGUAGE_DATA['Name']}
          name={name}
          {...getByTestId(testId, 'card-name')}
        />

        <CardDescription
          header={LANGUAGE_DATA['Description']}
          desc={desc}
          textOpen={LANGUAGE_DATA['ShowMore']}
          textClose={LANGUAGE_DATA['ShowLess']}
          {...getByTestId(testId, 'card-description')}
        />
      </section>

      <section>
        <CardLink
          header={LANGUAGE_DATA['Link']}
          path={link}
          pathName={linkName}
          linkAvailable={linkAvailable}
          {...getByTestId(testId, 'card-link')}
        />

        <CardTags
          header={LANGUAGE_DATA['Tags']}
          tags={tags}
          onClick={handleSearch}
          {...getByTestId(testId, 'card-tags')}
        />
      </section>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  testId: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  testId: '',
  tags: [],
};
