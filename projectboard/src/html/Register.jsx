import "../css/Register.css";
import BackgroundSetter from "../functions/BackgroundSetter.jsx";
import formToJSON from "../functions/FormToJSON.jsx";

const Register = () => {
    BackgroundSetter();

    /*
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const jsonData = Object.fromEntries(formData);

        fetch("http://localhost:5200/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    */

    //TODO: Make this a popup page instead

    return (
        <div className="register-cont">
            <div className="register">
                <h1>Register</h1>
                <form method="post" onSubmit={formToJSON.bind(null, "http://localhost:5200/register", 'POST')}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" required />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" required />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" required />
                    <br />
                    <button type="submit">Register</button>
                    <br />
                    <p>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Register;