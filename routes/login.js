import express from "express";
const router = express.Router();
import pool from "../helper/db.js";
import { decrypt } from "../helper/encryption.js";

router.get("/", async (req, res) => {
    try {
        // Get variables from request and database
        const { username, email, password } = req.body;
        const [tempIV] = await pool.query("SELECT iv FROM user WHERE username = ?", [username]);
        const iv = Buffer.from(tempIV[0].iv, "hex");
        const [login] = await pool.query("SELECT * FROM user WHERE username = ? AND email = ? AND password = ?", [username, email, password]);
        let data = login[0];

        // Decrypt variables
        Object.entries(data).forEach((item) => {
            data[item[0]] = decrypt(item[1], iv);
        }); 

        console.log(login[0]);

        // Check if query returned empty array
        if (login.length == 0) {
            return res.status(401).send("Invalid email or password");
        }

        //req.session.email = email;
        res.send("Logged in");
    } catch(err) {
        console.log(err);
    }
});

export default router;