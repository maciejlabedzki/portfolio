import { useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { getUrl } from '../../lib/fetch';
import { getLocalStorage } from '../../lib/localstorage';

const WrapUserContext = ({ children }) => {
  const [userContext, setUserContext] = useState({});
  const CONTENT_TYPE = 'owner';
  const IS_USER_ROLE_ADMIN_LS = getLocalStorage('userRoleAdmin', true);

  const userContextValue = useMemo(
    () => ({
      isAdmin: IS_USER_ROLE_ADMIN_LS,
      userStorage: {},
      ...userContext,
      updateUserContext: setUserContext,
    }),
    [IS_USER_ROLE_ADMIN_LS, userContext],
  );

  const fetchUserData = useCallback(async () => {
    try {
      const url = getUrl({
        contentType: CONTENT_TYPE,
      });

      const res = await fetch(url);

      if (!res.ok) throw new Error('Błąd w zapytaniu');

      const data = await res.json();

      setUserContext?.((prevState) => ({
        ...prevState,
        userStorage: data.items[0].fields,
      }));
    } catch (err) {
      toast.error(`Error on fetch owner data.`);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <UserContext.Provider value={userContextValue}>
      {children ? children : <Outlet />}
    </UserContext.Provider>
  );
};

export default WrapUserContext;
