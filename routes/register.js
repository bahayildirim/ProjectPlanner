import express from "express";
const router = express.Router();
import pool from "../helper/db.js";
import { encrypt } from "../helper/encryption.js";
import crypto from "crypto";

// Middleware to handle CORS requests
/*
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
*/

router.post("/", async (req, res) => {
    // Get registration info, then add it to database
    try {
        // Get variables from req body
        let { username, email, password } = req.body;
        const iv = crypto.randomBytes(16);

        // Create a dictionary with variables
        let data = {
            username: username,
            email: email,
            password: password,
        }

        // Encrypt variables
        Object.entries(data).forEach((item) => {
            console.log(item[0] + " " + item);
            data[item[0]] = encrypt(item[1], iv);
        }); 
        console.log(data.username + " " + data.password + " " + iv +  " " + data.email);

        // Insert encrypted info to database
        await pool.query("INSERT INTO user VALUES(?, ?, ?, ?)", [data.username, data.password, iv.toString("hex"), data.email]);
        res.send("User registered successfully");
    } catch(err) {
        console.log(err)
    }
})

export default router;