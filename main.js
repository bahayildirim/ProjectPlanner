import 'dotenv/config'
import app from "./helper/app.js";
import home from "./routes/home.js";
import login from "./routes/login.js";
import register from "./routes/register.js"; 
import logout from "./routes/logout.js";

const hostname = "127.0.0.1";
const port = 5200;

app.use("/home", home);
app.use("/login", login);
app.use("/register", register);
app.use("/logout", logout)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});