import {useState} from 'react';

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAutheniticated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginUser, setuser] = useState();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
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
        </>
    );
}

export default LoginForm;