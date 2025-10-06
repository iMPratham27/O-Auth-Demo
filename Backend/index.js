import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router } from './routes/authRouter.js';
import { connectDB } from './model/dbConnection.js';
import cookieParser from "cookie-parser";

const app = express();

connectDB();
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,               
}));
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

app.use("/auth", router);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})