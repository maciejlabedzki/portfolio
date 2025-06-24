import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import RegisterForm from '../../forms/RegisterForm/RegisterForm';
import { getByTestId } from '../../lib/helper';

const PageRegister = ({ testId }) => {
  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <RegisterForm />
    </div>
  );
};

export default PageRegister;

PageRegister.propTypes = {
  testId: PropTypes.string,
};

PageRegister.defaultProps = {
  testId: '',
};
