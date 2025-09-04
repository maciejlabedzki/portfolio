import { useCallback, useContext } from 'react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import Button from '../../components/Button/Button';
import { UserContext } from '../../contexts/UserContext';
import { getByTestId } from '../../lib/helper';

const PageAdmin = ({ testId }) => {
  const { isAdmin, updateUserContext } = useContext(UserContext);
  const getUserContext = useContext(UserContext);

  const handleUpdateAdmin = useCallback(
    (value) => {
      toast(`Context isAdmin is now ${value ? 'true' : 'false'}`);
      updateUserContext?.((prevState) => ({
        ...prevState,
        isAdmin: value,
      }));
    },
    [updateUserContext],
  );

  return (
    <div
      className={twMerge(
        'w-full mt-0 flex flex-col',
        'justify-center items-center mb-8',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="w-full bg-gray-50 py-2 flex justify-center mb-4">
        ADMIN PAGE {isAdmin ? '[ ADMIN ]' : '[ USER ]'}
      </div>

      <Button
        name="Context is admin"
        onClick={() => handleUpdateAdmin(true)}
        additionalClasses={'min-w-[200px]'}
      />

      <Button
        name="Context no admin"
        onClick={() => handleUpdateAdmin(false)}
        additionalClasses={'min-w-[200px]'}
      />

      <Button
        name="Console User Context"
        onClick={() => console.log(getUserContext)}
        additionalClasses={'min-w-[200px]'}
      />

      <Button
        name="Sentry error test"
        onClick={() => {
          throw new Error('This is your first error!');
        }}
        additionalClasses={'min-w-[200px]'}
      />
    </div>
  );
};

export default PageAdmin;
