import PropTypes from 'prop-types';
import { createContext } from 'react';

export const UserContext = createContext({});

UserContext.propTypes = {
  value: PropTypes.shape({
    isAdmin: PropTypes.bool,
    userStorage: PropTypes.shape({}),
  }),
};

export default UserContext;
