import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';
import UserContext from '../../contexts/UserContext';
import { getByTestId } from '../../lib/helper';

const AdminPage = ({ testId }) => {
  const { isAdmin, userStorage, updateUserContext } = useContext(UserContext);

  const handleUpdateAdmin = useCallback(
    (isAdmin) => {
      updateUserContext?.((prevState) => ({
        ...prevState,
        isAdmin: isAdmin,
        userStorage: {
          ...userStorage,
          // name: name,
        },
      }));
    },
    [updateUserContext, userStorage],
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
        name="Update to admin"
        onClick={() => handleUpdateAdmin(true)}
        additionalClasses={'min-w-[200px]'}
      />

      <Button
        name="Update to user"
        onClick={() => handleUpdateAdmin(false)}
        additionalClasses={'min-w-[200px]'}
      />
    </div>
  );
};

export default AdminPage;

AdminPage.propTypes = {
  testId: PropTypes.string,
};

AdminPage.defaultProps = {
  testId: '',
};
