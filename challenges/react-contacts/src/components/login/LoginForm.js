import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAutheniticated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {loginUser, user } = useAuth();
    const history = useHistory();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const isAuthenticated = loginUser(userName, password);
        console.log('user:', user);
        if(isAuthenticated){
            setIsAutheniticated(true);
            history.pushState('/');
        }
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
            <div className="form_group">
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    name="username"
                    type="text" 
                    placeholder="Username"  
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="form_group">
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div style={{marginTop: "1.5rem"}}>
                <button style={{cursor: "pointer"}} type="submit">Login</button>
            </div>
        </form>
        <p style={{ color: "red"}}>
            {(!isAuthenticated && isSubmitted) && "Login failed!"}
        </p>
        </>
    );
}

export default LoginForm;