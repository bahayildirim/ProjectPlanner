import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/getboards", async (req, res) => {
    try {
        // Get user from cookies
        const user = req.cookies.user;

        // Get user's boards
        const [data] = await pool.query("SELECT * FROM board WHERE board_user = ? ORDER BY board_order ASC", [user]);
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(404).send();
    }
})

router.get("/getcards", async (req, res) => {
    try {
        
    } catch(err) {
        console.log(err);
    }
})

router.post("/addboard", async (req, res) => {
    try {
        // Get order from body and user from cookies
        const order = req.body.order;
        const user = req.cookies.user;
        
        // Add to database with "New Board" as its name
        await pool.query("INSERT INTO board (title, board_order, board_user) VALUES (?, ?, ?)", ["Board " + order, order, user]);
        res.send("Board added successfully");
    } catch(err) {
        console.log(err);
        res.status(404).send()
    }
})

export default router;