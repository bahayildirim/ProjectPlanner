import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

app.use(express.json());
app.use(cors());

export default app;