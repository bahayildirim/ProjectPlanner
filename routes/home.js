import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/", (req, res) => {
    res.send("Home page");
})

export default router;