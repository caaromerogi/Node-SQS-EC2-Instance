import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./Routes/user";
import dbConnect from "./Config/mongo";
const PORT = process.env.PORT || 3002
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnect().then(() => console.log("Connected to mongo")).catch(err => console.log(err));
app.listen(PORT, () => console.log(`Running in port ${PORT}`));


