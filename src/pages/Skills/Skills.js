import * as Sentry from '@sentry/react';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { StarIcon } from '../../images';
import { getUrl } from '../../lib/fetch';
import { getByTestId } from '../../lib/helper';

const RatingSection = ({
  rating,
  ratingMax = 5,
  textMin = '',
  textMax = '',
}) => {
  let res = [];

  for (let x = 0; x < ratingMax; x++) {
    console.log('aa', x);
    res.push(
      <StarIcon
        key={`rating-${x}`}
        className={twMerge(
          'h-4 w-4 ',
          x < rating ? 'text-yellow' : 'text-gray-100',
        )}
      />,
    );
  }

  return (
    <div className="flex flex-row justify-center items-center">
      {textMin && <span className="mx-2 text-sm">{textMin}</span>}
      <div className="flex flex-row">{res}</div>
      {textMax && <span className="mx-2 text-sm">{textMax}</span>}
    </div>
  );
};

const SkillItemRow = ({
  name,
  label,
  imgSrc,
  imgAlt,
  rating,
  additionalClasses = '',
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-row justify-start',
        'items-center w-auto h-6 mb-2  mt-2',
        additionalClasses,
      )}
    >
      {label && (
        <label
          className={twMerge(
            'border-solid border border-gray-100 ',
            'px-2 rounded-xl text-[10px]',
            'min-w-[60px] flex justify-center items-center',
            'mr-2',
          )}
        >
          {label}
        </label>
      )}

      {name && (
        <div className="text-sm" style={{ lineHeight: 1 }}>
          {name}
        </div>
      )}

      {imgSrc && (
        <img
          className={twMerge('rounded-xl max-w-[30px]')}
          src={imgSrc}
          alt={imgAlt}
        />
      )}

      {rating && <RatingSection rating={rating} />}
    </div>
  );
};

const SkillsItem = ({ data }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-start',
        'mb-4 border border-gray-100 p-3 rounded-xl',
        'w-[300px] relative px-4',
      )}
    >
      <SkillItemRow
        _label={'Id'}
        name={data.id}
        additionalClasses="absolute top-3 right-4 border rounded w-5 h-5"
      />

      <div className="flex flex-row">
        <SkillItemRow
          _label={'Icon'}
          imgSrc={data.icon}
          imgAlt={data.iconAlt || data.name}
          additionalClasses="mr-3"
        />

        <SkillItemRow _label={'Name'} name={data.name} />
      </div>

      <SkillItemRow _label={'Describe'} name={data.describe} />

      <SkillItemRow _label={'Rating'} rating={data.rating} />
    </div>
  );
};

const getImgUrlFromAsset = (asset, imgID) => {
  for (var i = 0; i < asset.length; i++) {
    if (asset[i].sys.id === imgID) {
      return asset[i].fields.file.url;
    }
  }
};

const PageSkills = ({ testId }) => {
  const { t } = useTranslation();
  const CONTENT_TYPE = 'skills';
  const FETCH_ORDER = '-fields.id';
  const [skills, setSkills] = useState([]);

  const handleSentryLog = useCallback(() => {
    Sentry.logger.info('User in page: Skills');
  }, []);

  useEffect(() => {
    handleSentryLog();
  }, [handleSentryLog]);

  const fetchSkillData = useCallback(async () => {
    try {
      const url = getUrl({
        contentType: CONTENT_TYPE,
        order: FETCH_ORDER,
      });

      const res = await fetch(url);

      if (!res.ok) throw new Error('Błąd w zapytaniu');

      const data = await res.json();

      if (data.items.length > 0) {
        const assets = data.includes.Asset;
        const dataIncludeImgUrlFromAsset = data.items.map((item) => {
          return {
            id: item.fields.id,
            icon:
              item.fields.icon?.sys?.id &&
              getImgUrlFromAsset(assets, item.fields.icon.sys.id),
            name: item.fields.name,
            rating: item.fields.rating,
            projects: item.fields.projects,
            describe: item.fields.describe,
          };
        });

        setSkills(dataIncludeImgUrlFromAsset);
      } else {
        setSkills([]);
      }
    } catch (err) {
      toast.error(`Error on fetch features data.`);
    }
  }, []);

  useEffect(() => {
    fetchSkillData();
  }, [fetchSkillData]);

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Skills.Title')}</title>
      <div>{t('Page.Skills.Header')}</div>

      {skills &&
        skills.map((skill) => <SkillsItem key={skill.id} data={skill} />)}
    </div>
  );
};

export default PageSkills;
