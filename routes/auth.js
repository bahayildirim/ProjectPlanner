import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/", async (req, res) => {
    try {
        // Get cookie data and convert it to JSON
        const [query] = await pool.query("SELECT data FROM sessions WHERE session_id = ?", [req.cookies.sessionID]);
        const data = JSON.parse(query[0].data);
        
        // Check if the user from the session matching the session ID matches the cookie
        if(data.username === req.cookies.user) {
            res.status(200).send(true);
        } else {          
            res.status(401).send(false);
        }
    } catch(err) {
        console.log(err);
        res.status(401).send(false);
    }
})

export default router;