import "../css/Login.css";
import BackgroundSetter from "../functions/BackgroundSetter.jsx";
import formToJSON from "../functions/FormToJSON.jsx";

function Login() {
    BackgroundSetter();

    return (
        <div className="login-cont">
            <div className="login">
                <h1 className="league-spartan-login">Login to Project Planner</h1>
                <form method="get" onSubmit={formToJSON.bind(null, "http://localhost:5200/login", 'GET')}>
                    <input className="dosis-login" type="text" placeholder="Username" name="username" id="username" required />
                    <input className="dosis-login" type="password" placeholder="Password" name="password" id="password" required />
                    <button className="league-spartan-login" type="submit">Login</button>
                    <p className="dosis-login">Don't have an account? Register <a href="/register">here</a></p>
                    <p className="league-spartan-login error-login">Wrong username/password. Please try again.</p>
                </form>
            </div>
        </div>
    )
}

export default Login