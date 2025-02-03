import express from "express";
const router = express.Router();
import pool from "../helper/db.js";

router.get("/", async (req, res) => {
    try {
        if(req.session.isAuth) {
            res.send(true)
        } else {            
            res.send(false);
        }
    } catch(err) {
        console.log(err);
    }
})

export default router;