import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';
import NavigationLink from '../../components/NavigationLink/NavigationLink';
import { NAVIGATION_DATA } from '../../data/navigation';
import { FlagIcon } from '../../images';
import { getByTestId } from '../../lib/helper';
import { getLocalStorage, setLocalStorage } from '../../lib/localstorage';

const Navigation = ({ testId }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleCookiesFromLocalstorage = useCallback(() => {
    const language = getLocalStorage('language');

    i18n.changeLanguage(language);
  }, [i18n]);

  useEffect(() => {
    handleCookiesFromLocalstorage();
  }, [handleCookiesFromLocalstorage]);

  const languageChange = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      setLocalStorage('language', lang);
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
      <div className="flex flex-row">
        {NAVIGATION_DATA.map((nav) => (
          <NavigationLink
            key={nav.name}
            name={t(`Navigation.${nav.name}`)}
            linkPath={nav.path}
            active={location.pathname === nav.path}
            // hidden={
            //   nav.admin
            //     ? JSON.parse(process?.env?.REACT_APP_ADMIN || false)
            //     : false
            // }
          />
        ))}
      </div>

      <div className="flex flex-row mt-0.5">
        <Button
          icon={<FlagIcon className="w-4 h-4 mr-1" />}
          name="en"
          onClick={() => languageChange('en')}
          theme={i18n.language === 'en' ? 'primary' : 'transparent'}
          space="small"
          additionalClasses={'py-0 px-1 text-sm mx-0.5'}
          title={t('Global.Language', { lng: 'en' })}
        />
        <Button
          icon={<FlagIcon className="w-4 h-4 mr-1" />}
          name="pl"
          onClick={() => languageChange('pl')}
          theme={i18n.language === 'pl' ? 'primary' : 'transparent'}
          space="small"
          additionalClasses={'py-0 px-1 text-sm mx-0.5'}
          title={t('Global.Language', { lng: 'pl' })}
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
