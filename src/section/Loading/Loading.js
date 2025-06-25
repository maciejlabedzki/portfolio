import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Loader } from '../../components';

const Loading = () => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        'fixed top-0 left-0 w-full h-full bg-black-300 text-white',
        'z-[200] flex flex-col justify-center items-center',
      )}
    >
      <Loader theme="light" />
      <span className="text-sm uppercase py-2">
        {t('Global.PleaseWaitDots')}
      </span>
    </div>
  );
};

export default Loading;
