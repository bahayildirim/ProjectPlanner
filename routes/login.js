const express = require("express");
const router = express.Router();
const pool = require("../helper/db.js");

router.get("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const [login] = await pool.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password]);
    
        // Check if query returned empty array
        if (login.length == 0) {
            return res.status(401).send("Invalid email or password");
        }

        req.session.email = email;
        res.send("Logged in");
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;