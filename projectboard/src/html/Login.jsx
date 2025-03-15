import { useState } from "react";
import "../css/Login.css";
import { Navigate } from "react-router-dom";

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showError, setShowError] = useState(false);

    function handleLogin(event) {
        // Prevent page from reloading after submit
        event.preventDefault();
    
        fetch("http://127.0.0.1:5200/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
        .then(response => response.text())
        .then(data => {
            if(data === "Logged in") {
                setLoggedIn(true);
            } else {
                setShowError(true);
            }
        })
        .catch(error => console.log(error))    
    }

    if(loggedIn) {
        return <Navigate to="/project" />;
    } else {
        return (
            <div className="login-cont">
                <div className="login">
                    <h1 className="league-spartan-login">Login to Project Planner</h1>
                    <form onSubmit={handleLogin}>
                        <input className="dosis-login" type="text" placeholder="Username" name="username" id="username" required />
                        <input className="dosis-login" type="text" placeholder="E-Mail" name="email" id="email" required />
                        <input className="dosis-login" type="password" placeholder="Password" name="password" id="password" required />
                        <button className="league-spartan-login" type="submit">Login</button>
                        <p className="dosis-login">Don't have an account? Register <a href="/register">here</a></p>
                        {showError === true && <p className="league-spartan-login error-login">Wrong username/password. Please try again.</p>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Login