import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Loader from '../../components/Loader/Loader';

const Loading = ({ size = 'full', theme = 'light' }) => {
  const { t } = useTranslation();

  const styleSize = {
    full: 'fixed top-0 left-0 w-full h-full',
    wide: 'w-full',
  };

  const styleTheme = {
    light: 'bg-white text-black',
  };

  const styleLoader = {
    light: 'dark',
    dark: 'light',
  };

  return (
    <div
      className={twMerge(
        'bg-black-300 text-white py-4',
        'z-[200] flex flex-col justify-center items-center',
        styleSize[size],
        styleTheme[theme],
      )}
    >
      <Loader theme={styleLoader[theme]} />
      <span className="text-sm uppercase py-2">
        {t('Global.PleaseWaitDots')}
      </span>
    </div>
  );
};

export default Loading;
