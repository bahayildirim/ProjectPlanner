import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/", async (req, res) => {
    try {
        req.session.destroy()
        res.send("Logged out");
    } catch(err) {
        console.log(err);
    }
});

export default router;