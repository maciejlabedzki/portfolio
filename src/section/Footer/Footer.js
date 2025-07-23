import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import packageJsonInfo from '../../../package.json';
import { Paragraph } from '../../components';
import { getByTestId } from '../../lib/helper';

const Footer = ({ testId }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={twMerge(
        'fixed bottom-0 bg-black-200',
        'z-40 flex justify-center items-center w-full ',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Paragraph
        additionalNameClass="text-xs"
        name={t('Global.Copyright', {
          currentYear,
        })}
      />
      <span className="text-white text-xs">v.{packageJsonInfo.version}</span>
    </div>
  );
};

export default Footer;
