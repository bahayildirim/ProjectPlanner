import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // End session
        res.clearCookie("sessionID");
        res.send("Logged out");
        
    } catch(err) {
        console.log(err);
    }
});

export default router;