import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';
import { ArrowUpIcon } from '../../images';
import { eventValidateScrollHeight, getByTestId } from '../../lib/helper';

const ScrollToTop = ({ testId }) => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      eventValidateScrollHeight(showButton, setShowButton),
    );
    return () => {
      window.removeEventListener('scroll', () =>
        eventValidateScrollHeight(showButton, setShowButton),
      );
    };
  }, [showButton]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      icon={<ArrowUpIcon className="w-3 h-3 sm:w-5 sm:h-5" />}
      onClick={handleScrollTop}
      radius="full"
      additionalClasses={twMerge(
        'w-5 h-5 p-4 sm:p-8 z-[100] fixed bg-tahiti-600 text-white ',
        'bottom-0 sm:bottom-10 right-0 sm:right-5',
        !showButton && 'hidden',
      )}
      title={t('Global.ScrollTop')}
      {...getByTestId(testId, 'container')}
    />
  );
};

export default ScrollToTop;
