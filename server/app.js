import express from "express";
const app = express();
import connect from "./db/conn.js";
import router from "./routes/router.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

const port = process.env.port || 8009


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);


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