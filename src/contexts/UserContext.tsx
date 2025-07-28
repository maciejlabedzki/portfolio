import { createContext } from 'react';

interface UserStorage {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  linkedIn?: string;
}

interface UserContextType {
  isAdmin: boolean;
  userStorage: UserStorage;
}

const INITIAL_CONTEXT: UserContextType = {
  isAdmin: false,
  userStorage: {},
};

export const UserContext = createContext<UserContextType>(INITIAL_CONTEXT);
