import { useNavigate, useLocation } from 'react-router-dom';
import AuthConsumer from './Auth';

const Login = () => {
  const { login } = AuthConsumer();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/dashboard");
    });
  }

  return (
    <>
      <h1>Login -- Public</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;