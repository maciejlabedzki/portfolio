import { createContext } from 'react';

export const UserContext = createContext({ isAdmin: false, userStorage: {} });

export default UserContext;
