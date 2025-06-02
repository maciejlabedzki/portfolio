import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Button, Link } from '../../components';
import { getByTestId } from '../../lib/helper';

const Navigation = ({ testId }) => {
  const { t, i18n } = useTranslation();

  const languageChange = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
    },
    [i18n],
  );

  return (
    <div
      className={twMerge(
        'bg-black-300 flex flex-col',
        'sm:flex-row justify-between',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Link
        name={t('Navigation.Home')}
        linkPath={'/'}
        target={'_self'}
        additionalClasses={'w-fit'}
      />

      <div className="flex flex-row">
        <Button
          name="EN"
          onClick={() => languageChange('en')}
          theme={i18n.language === 'en' ? 'blue' : 'transparent'}
        />
        <span className="text-white mx-1 pt-1">/</span>
        <Button
          name="PL"
          onClick={() => languageChange('pl')}
          theme={i18n.language === 'pl' ? 'blue' : 'transparent'}
        />
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  testId: PropTypes.string,
};

Navigation.defaultProps = {
  testId: '',
};
