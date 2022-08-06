import * as React from 'react';

const authContext = React.createContext();

export function useAuth(){
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login(){
      return new Promise((resolved, rejected) => {
        setAuthed(true);
        console.log("You're authenticated.");
        resolved();
      })
    },
    logout(){
      return new Promise((resolved, rejected) => {
        setAuthed(false);
        console.log("You're logged out");
        resolved();
      })
    }
  };
}

export function AuthProvider({children}){
  const auth = useAuth();
  return(
    <authContext.Provider value= { auth }>
      { children }
    </authContext.Provider>
  );
}

export default function AuthConsumer(){
  return React.useContext(authContext);
}