import {useState} from 'react';

const RegisterForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
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
            <div>
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
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    );
    
}

export default RegisterForm;