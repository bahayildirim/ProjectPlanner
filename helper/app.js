import express from "express";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors({
    origin: ["http://127.0.0.1:5000"],
    credentials: true
}));

export default app;