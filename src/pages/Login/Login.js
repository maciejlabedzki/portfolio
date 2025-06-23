import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';
import LoginForm from '../../forms/LoginForm/LoginForm';
import RegisterForm from '../../forms/RegisterForm/RegisterForm';
import { getByTestId } from '../../lib/helper';

const PageLogin = ({ testId }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="flex flex-row justify-center items-center">
        <Button
          name={'Login'}
          onClick={handleSwitch}
          theme={isLoginForm ? 'primary' : 'secondary'}
          additionalClasses={'min-w-[100px]'}
        />

        <Button
          name={'Register'}
          onClick={handleSwitch}
          theme={!isLoginForm ? 'primary' : 'secondary'}
          additionalClasses={'min-w-[100px]'}
        />
      </div>

      {isLoginForm ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default PageLogin;

PageLogin.propTypes = {
  testId: PropTypes.string,
};

PageLogin.defaultProps = {
  testId: '',
};
