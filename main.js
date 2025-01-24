const app = require("./helper/app.js");  // Shared app instance
const home = require("./routes/home.js");
const login = require("./routes/login.js");
const register = require("./routes/register.js");
const logout = require("./routes/logout.js");
const db = require("./helper/db.js");

const hostname = "127.0.0.1";
const port = 5200;

app.use("/home", home);
app.use("/login", login);
app.use("/register", register);
app.use("/logout", logout)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});