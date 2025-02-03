import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.use("/", async (req, res) => {
    try {
        
    } catch(err) {
        console.log(err);
    }
})

export default router;