import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { USER_DATA } from '../../data/user';

const WrapUserContext = ({ children }) => {
  const [userContext, setUserContext] = useState({});
  const user = USER_DATA;

  const userContextValue = useMemo(
    () => ({
      isAdmin: false,
      userStorage: user,
      ...userContext,
      updateUserContext: setUserContext,
    }),
    [user, userContext],
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children ? children : <Outlet />}
    </UserContext.Provider>
  );
};

export default WrapUserContext;
