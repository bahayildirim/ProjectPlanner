import express from "express";
const router = express.Router();
import pool from "../helper/db.js";
import argon2 from "argon2";

router.post("/", async (req, res) => {
    try {
        // Get variables from request
        let { username, email, password } = req.body;

        // Get email and password from database
        const [login] = await pool.query("SELECT email, password FROM user WHERE username = ?", [username]);

        // Check if hashed information matches with the database
        if (await argon2.verify(login[0].email, email) && await argon2.verify(login[0].password, password)) {
            req.session.username = username;
            res.cookie("sessionID", req.sessionID);
            res.cookie("user", username);
            res.status(200).send("Logged in");
        } else {
            // If nothing is found
            return res.status(401).send("Invalid email or password");
        }
    } catch(err) {
        console.log(err);
    }
});

export default router;