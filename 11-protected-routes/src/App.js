import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import Pricing from './Pricing';
import RequiredAuth from './RequiredAuth';
import Settings from './Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/dashboard" element={
            <RequiredAuth>
              <Dashboard/>
            </RequiredAuth>
          }/>
          <Route path="/settings" element={
            <RequiredAuth>
              <Settings/>
            </RequiredAuth>
          }/>
          <Route path="/login" element={<Login/>}/>
        
        </Routes>
      </Router>
    </AuthProvider>    
  );
}

export default App;
