const express = require("express");
const router = express.Router();
const pool = require("../helper/db.js");

router.get("/", async (req, res) => {
    console.log(req.sessionID);
    res.send("Login");
})

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const [login] = await pool.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password]);

    // Check if query returned empty array
    if (login.length === 0) {
        return res.status(401).send("Invalid email or password");
    }

    // TODO: Create session
    res.send("Logged in");
});

module.exports = router;