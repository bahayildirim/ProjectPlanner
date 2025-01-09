import "../css/Login.css";
import BackgroundSetter from "../functions/BackgroundSetter.jsx";
import formToJSON from "../functions/FormToJSON.jsx";

//TODO: Make this a popup page instead

function Login() {
    BackgroundSetter();

    return (
        <div className="login-cont">
            <div className="login">
                <h1>Login</h1>
                <form method="post" onSubmit={formToJSON.bind(null, "http://localhost:5200/login", 'POST')}>
                    <input type="text" placeholder="Username" name="username" id="username" required />
                    <br />
                    <input type="password" placeholder="Password" name="password" id="password" required />
                    <br />
                    <button type="submit">Login</button>
                    <br />
                    <br />
                    <p>Don't have an account? <a href="/register">Create Account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login