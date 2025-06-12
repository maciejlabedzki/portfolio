import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, ChevronUpIcon } from '../../../images';
import { getByTestId } from '../../../lib/helper';
import Button from '../../Button/Button';
import Tag from '../../Tag/Tag';

const CardTags = ({ header, onClick, tags, tagsLimit, testId }) => {
  const [showMoreTag, setShowMoreTag] = useState(false);

  if (!tags || !tags?.length) {
    return;
  }

  const isLimited = tags.length > tagsLimit;
  const limitTags = showMoreTag ? tags : [...tags].splice(0, tagsLimit);

  const handleToggleShowMoreTags = () => {
    setShowMoreTag(!showMoreTag);
  };

  return (
    <div
      className={twMerge(
        'mt-0 mb-0 pb-4 bg-gray-100',
        'border-t border-gray-100 relative pt-4',
        'min-h-[80px]',
      )}
      {...getByTestId(testId, 'container')}
    >
      {header && (
        <label
          className={twMerge(
            'text-xs lowercase px-2 font-bold m-0',
            'px-2 py-0 w-fit mb-2 text-black',
            'absolute rounded-full ml-2 left-0 top-[-8px]',
            'bg-white border border-gray-50',
          )}
          {...getByTestId(testId, 'header')}
        >
          {header}
        </label>
      )}

      <div
        className="px-2 text-sm flex flex-wrap"
        {...getByTestId(testId, 'tags-list')}
      >
        {limitTags?.map((tag, index) => (
          <Tag key={index} text={tag} onClick={() => onClick(tag, 'tags')} />
        ))}

        {isLimited && (
          <>
            <span className="text-gray-50 ml-1 mr-1">...</span>
            <Button
              icon={
                showMoreTag ? (
                  <ChevronUpIcon className={twMerge('h-2 w-2')} />
                ) : (
                  <ChevronDownIcon className={twMerge('h-2 w-2')} />
                )
              }
              theme="secondary"
              radius="full"
              space="normal"
              height="auto"
              margin="tiny"
              border="none"
              additionalClasses="h-3 w-3"
              onClick={handleToggleShowMoreTags}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardTags;

CardTags.propTypes = {
  testId: PropTypes.string,
};

CardTags.defaultProps = {
  testId: '',
  header: '',
  tags: undefined,
  onClick: undefined,
  tagsLimit: 9,
};
