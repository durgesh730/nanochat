import express from "express";
const app = express();
import cors from 'cors';
import cookieParser from "cookie-parser";

import user from "./routes/userRoute.js";
import connect from "./db/conn.js";
import Student from "./routes/studentRoute.js";
import Neet from "./routes/neetRoute.js";
import { config } from "dotenv";
import payment from "./routes/paymentRoute.js";
import Razorpay from "razorpay";
const port = 8009

config('dotenv')
config({ path: "./config/config.env" })
app.use(express.json());
app.use(cookieParser());
app.use(cors());

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
})

app.use(user);
app.use(Neet)
app.use(Student)
app.use(payment)

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})