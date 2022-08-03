import { useState } from 'react';
import { authContext } from "./authContext";

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const loginUser = (userName, password) => {
    if(userName === 'mehdi' && password === 'reactisawesone'){
      setUser(userName);
      return true;
    }
    return false;
  }

  const logoutUser = () => setUser(null);
  
  return(
    <authContext.Provider value={{loginUser, logoutUser, user }}>
      {children}
    </authContext.Provider>
  );
}