import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/", async (req, res) => {
    try {
        console.log(req.cookies);
        if(req.cookies.sessionID) {
            console.log("auth successful");
            res.send(true)
        } else {
            console.log("auth failed");            
            res.send(false);
        }
    } catch(err) {
        console.log(err);
    }
})

export default router;