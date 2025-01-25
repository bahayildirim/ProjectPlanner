import express from "express";
const router = express.Router();
import pool from "../helper/db.js";
import { decrypt } from "../helper/encryption.js";

router.get("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const [login] = await pool.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password]);
        console.log(login);
        const loginDecrypted = decrypt(login);
    
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

export default router;