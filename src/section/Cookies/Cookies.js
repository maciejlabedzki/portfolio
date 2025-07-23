import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';
import { getByTestId } from '../../lib/helper';
import { getLocalStorage, setLocalStorage } from '../../lib/localstorage';

const Cookies = ({ testId }) => {
  const { t } = useTranslation();
  const [cookiesVisible, setCookiesVisible] = useState(false);

  const handleCookiesFromLocalstorage = useCallback(() => {
    const status = getLocalStorage('cookies', true);

    if (status !== null) {
      setCookiesVisible(!status);
    }
  }, []);

  useEffect(() => {
    handleCookiesFromLocalstorage();
  }, [handleCookiesFromLocalstorage]);

  const handleCookiesPath = () => {
    window.open('/cookies', '_self');
  };

  const handleClose = () => {
    setCookiesVisible(true);
    setLocalStorage('cookies', false);
  };

  return (
    <div
      className={twMerge(
        'bg-gray-100 fixed bottom-0 z-[110] p-2 w-full flex justify-center',
        'items-center flex-col sm:flex-row opacity-90',
        cookiesVisible && 'hidden',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="max-w-[1200px]">
        <span className="mr-1">{t('Global.CookiesInfoUse')}</span>
        <span
          className="mr-1 underline hover:no-underline cursor-pointer"
          onClick={handleCookiesPath}
        >
          {t('Global.CookiesHereMoreInfo')}
        </span>
        <span className="mr-1">{t('Global.CookiesInfoSave')}</span>
        <span className="mr-1">{t('Global.CookiesInfoDetail')}</span>
        <span className="mr-1">{t('Global.CookiesInfoAccepted')}</span>
      </div>

      <Button
        name={t('Global.Close')}
        theme="primary"
        space="normal"
        onClick={handleClose}
      />
    </div>
  );
};

export default Cookies;
