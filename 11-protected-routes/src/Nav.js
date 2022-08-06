import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthConsumer from './Auth';

const Nav = () => {
  const { logout } = AuthConsumer();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <nav>
      <li>
        <Link to ="/">Home</Link>
      </li>
      <li>
        <Link to ="/login">Login</Link> - <button onClick={handleLogout}>Logout</button>
      </li>
    </nav>
  );
}

export default Nav;