import 'dotenv/config'
import app from "./helper/app.js";
import login from "./routes/login.js";
import register from "./routes/register.js"; 
import logout from "./routes/logout.js";
import project from "./routes/project.js";
import auth from "./routes/auth.js";

const hostname = "127.0.0.1";
const port = 5200;

app.use("/project", project)
app.use("/login", login);
app.use("/register", register);
app.use("/logout", logout);
app.use("/auth", auth);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});