import express from "express";
const router = express.Router();
import pool from "../helper/db.js";
import argon2 from "argon2";

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

        // Hash sensitive information
        password = await argon2.hash(password);
        email = await argon2.hash(email);

        // Insert hashed info to database
        await pool.query("INSERT INTO user VALUES(?, ?, ?)", [username, password, email]);
        res.send("User registered successfully");
    } catch(err) {
        console.log(err)
    }
})

export default router;