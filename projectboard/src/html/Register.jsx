import "../css/Register.css";
import formToJSON from "../functions/FormToJSON.jsx";

const Register = () => {
    return (
        <div className="register-cont">
            <div className="register">
                <h1 className="league-spartan-register">Register</h1>
                <form method="post" onSubmit={formToJSON.bind(null, "http://localhost:5200/register", 'POST')}>
                    <input className="dosis-register" type="text" placeholder="Username" name="username" id="username" required />
                    <input className="dosis-register" type="email" placeholder="E-Mail" name="email" id="email" required />
                    <input className="dosis-register" type="password" placeholder="Password" name="password" id="password" required />
                    <input className="dosis-register" type="password" placeholder="Confirm Password" name="confirm-password" id="confirm-password" required />
                    <button className="league-spartan-register" type="submit">Sign In</button>
                    <p className="dosis-register">Already have an account? Login <a href="/login">here</a></p>
                    <p className="league-spartan-register error-register">There is already an account with this e-mail.</p>
                </form>
            </div>
        </div>
    );
};

export default Register;