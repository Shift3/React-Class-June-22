import { Navigate, useLocation } from 'react-router-dom';
import AuthConsumer from "./Auth";

const RequiredAuth = ({children}) => {
  const { authed } = AuthConsumer();
  const location = useLocation();

  return authed ? children : <Navigate to="/login" state={{path: location.pathname}}/>
}

export default RequiredAuth;