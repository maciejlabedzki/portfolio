import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/Button/Button';
import { LANGUAGE_DATA } from '../../data/langEn';
import { getByTestId } from '../../lib/helper';

const Page404 = ({ testId }) => {
  const handleRedirect = () => {
    window.open('/', '_self');
  };

  return (
    <div
      className={twMerge(
        'w-full mt-20 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <ExclamationTriangleIcon className="w-20 h-20 text-black-400" />

      <span className="text-xl font-bold mb-2">{LANGUAGE_DATA['Page404']}</span>
      <span className="text-lg mb-0">{LANGUAGE_DATA['WrongURLAdress']}</span>
      <span className="text-lg mb-20">{window.location.href}</span>

      <Button onClick={handleRedirect} name={LANGUAGE_DATA['BackToHomePage']} />
    </div>
  );
};

export default Page404;

Page404.propTypes = {
  testId: PropTypes.string,
};

Page404.defaultProps = {
  testId: '',
};
