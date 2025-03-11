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

router.post("/getcards", async (req, res) => {
    try {
        // Get user and board
        const user = req.cookies.user;
        const board_title = req.body.board_title;

        // Get user's boards
        const [data] = await pool.query("SELECT * FROM card WHERE card_user = ? AND board_title = ? ORDER BY card_order ASC", [user, board_title]);

        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(404).send();
    }
})

router.post("/addboard", async (req, res) => {
    try {
        // Get user from cookies
        const user = req.cookies.user;

        // Get the current highest order
        const [orderData] = await pool.query("SELECT MAX(board_order) AS highest_order FROM board WHERE board_user = ?", [user]);
        const order = orderData[0].highest_order;
     
        // Add to database with "New Board" as its name
        await pool.query("INSERT INTO board (title, board_order, board_user) VALUES (?, ?, ?)", ["Board " + (order + 1), order + 1, user]);
        res.send("Board added successfully");
    } catch(err) {
        console.log(err);
        res.status(404).send()
    }
})

router.post("/addcard", async (req, res) => {
    try {
        // Get card info from body and cookies
        const text = "New Card";
        const user = req.cookies.user;
        const board_title = req.body.board_title;

        // Get the current highest order
        const [orderData] = await pool.query("SELECT MAX(card_order) AS highest_order FROM card WHERE card_user = ? AND board_title = ?", [user, board_title]);
        const order = orderData[0].highest_order;
        
        // Add to database with "New Board" as its name
        await pool.query("INSERT INTO card (text, board_title, card_order, card_user) VALUES (?, ?, ?, ?)", [text, board_title, order + 1, user]);
        res.send("Card added successfully");
    } catch(err) {
        console.log(err);
        res.status(404).send();
    }
})

export default router;