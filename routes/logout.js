const express = require("express");
const router = express.Router();
const pool = require("../helper/db.js");

router.get("/", async (req, res) => {
    try {
        req.session.destroy()
        res.send("Logged out");
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;