const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home page");
})

module.exports = router;