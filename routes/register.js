const express = require("express");
const router = express.Router();
const pool = require("../helper/db.js");

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
        const { username, email, password } = req.body;
        await pool.query("INSERT INTO user VALUES(?, ?, ?)", [username, password, email]);
        res.send("User registered successfully");
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;