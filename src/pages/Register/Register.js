import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import RegisterForm from '../../forms/RegisterForm/RegisterForm';
import { getByTestId } from '../../lib/helper';

const PageRegister = ({ testId }) => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <title>{t('Page.Register.Title')}</title>

      <RegisterForm />
    </div>
  );
};

export default PageRegister;
