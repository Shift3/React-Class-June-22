import {createContext, useContext } from 'react';

export const authContext = createContext(null);
authContext.displayName = 'AuthContext';

export const useAuth = () => useContext(authContext);