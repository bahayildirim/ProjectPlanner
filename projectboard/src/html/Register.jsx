import "../css/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [showError, setShowError] = useState(false);
    const [error, setError] = useState("");
    let navigate = useNavigate();

    function handleRegister(event) {
        // Prevent page from reloading after submit
        event.preventDefault();
    
        fetch("http://127.0.0.1:5200/register", {
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
            if(data === "User registered successfully") {
                console.log("User registered successfully");
                navigate("/login");
            } else if (data ===  "User already exists") {
                setError("User already exists.");
                setShowError(true);
            } else if (data === "Username is too long.") {
                setError("Username is too long");
                setShowError(true);
            } else {
                setError("Invalid register information.");
                setShowError(true);
            }
        })
        
        .catch(error => console.log(error))    
    }

    return (
        <div className="register-cont">
            <div className="register">
                <h1 className="league-spartan-register">Register</h1>
                <form method="post" onSubmit={handleRegister}>
                    <input className="dosis-register" type="text" placeholder="Username" name="username" id="username" required />
                    <input className="dosis-register" type="email" placeholder="E-Mail" name="email" id="email" required />
                    <input className="dosis-register" type="password" placeholder="Password" name="password" id="password" required />
                    <input className="dosis-register" type="password" placeholder="Confirm Password" name="confirm-password" id="confirm-password" required />
                    <button className="league-spartan-register" type="submit">Sign In</button>
                    <p className="dosis-register">Already have an account? Login <a href="/login">here</a></p>
                    {showError === true && <p className="league-spartan-register error-register">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;