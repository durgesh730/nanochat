import express from "express";
const app = express();
import cors from 'cors';
import cookieParser from "cookie-parser";

import user from "./routes/user.js";
import connect from "./db/conn.js";
import Student from "./routes/students.js";
import Neet from "./routes/neet.js";
const port = 8009

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(user);
app.use(Neet)
app.use(Student)

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