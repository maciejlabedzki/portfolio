import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Button, NavigationLink } from '../../components';
import Dropdown from '../../components/Dropdown/Dropdown';
import { NAVIGATION_DATA, NAVIGATION_USER_DATA } from '../../data/navigation';
import { FlagIcon, UserIcon } from '../../images';
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

  const validateNavigationHidden = (visible, admin) => {
    if (visible === false) {
      return true;
    } else if (admin) {
      return !JSON.parse(process.env.REACT_APP_ADMIN) || false;
    } else {
      return false;
    }
  };

  return (
    <div
      className={twMerge(
        'bg-black-300 flex flex-col',
        'sm:flex-row justify-between',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="flex flex-col xs:flex-row">
        {NAVIGATION_DATA.map((nav) => (
          <NavigationLink
            key={nav.name}
            name={t(`Navigation.${nav.name}`)}
            linkPath={nav.path}
            active={location.pathname === nav.path}
            hidden={validateNavigationHidden(nav.visible, nav.admin)}
          />
        ))}
      </div>

      <div className="flex flex-row mt-0.5 justify-center items-center">
        <Dropdown
          icon={<UserIcon className="w-4 h-4 text-white" />}
          additionalClasses="mr-2"
          theme="dark"
          align="topRight"
          hasBackdrop={true}
        >
          {NAVIGATION_USER_DATA.map((nav) => (
            <NavigationLink
              key={nav.name}
              name={t(`Navigation.${nav.name}`)}
              linkPath={nav.path}
              active={location.pathname === nav.path}
              hidden={validateNavigationHidden(nav.visible, nav.admin)}
            />
          ))}
        </Dropdown>
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
