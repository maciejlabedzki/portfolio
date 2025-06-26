import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import {
  getByTestId,
  linkWithHttps,
  validTextLength,
} from '../../../lib/helper';

const CardLink = ({
  linkAvailable,
  header,
  path,
  pathName,
  target,
  rel,
  testId,
}) => {
  const { t } = useTranslation();

  if (!path) {
    return;
  }

  return (
    <p
      className={twMerge(
        'mb-0 pt-4 pb-4 bg-white',
        'border-t border-gray-100 relative',
      )}
      {...getByTestId(testId, 'container')}
    >
      {header && (
        <span
          className={twMerge(
            'text-[9px] lowercase px-2 font-bold m-0 px-2 py-0 w-fit mb-2',
            'absolute rounded-full ml-2 left-0 top-[-8px]',
            'bg-white border border-gray-50 text-black',
          )}
          {...getByTestId(testId, 'header')}
        >
          {header}
        </span>
      )}

      {linkAvailable ? (
        <a
          className={twMerge(
            'text-green px-2 flex w-fit text-sm',
            'pointer hover:text-tahiti-600 h-6',
          )}
          href={linkWithHttps(path)}
          target={target}
          rel={rel}
          title={path}
          {...getByTestId(testId, 'link')}
        >
          {validTextLength(pathName || path, 30)}
        </a>
      ) : (
        <span className="text-[11px] text-black-300 px-2 h-6">
          {t('Card.NoPreviewLink')}
        </span>
      )}
    </p>
  );
};

export default CardLink;

CardLink.propTypes = {
  testId: PropTypes.string,
};

CardLink.defaultProps = {
  testId: '',
  header: '',
  pathName: '',
  path: '',
  target: '_blank',
  rel: 'noopener noreferrer',
  linkAvailable: true,
};
