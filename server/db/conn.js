import mongoose from "mongoose";
import { config } from "dotenv";
config('dotenv')

mongoose.set('strictQuery', true);

export default async function connect() {
    mongoose.connect(process.env.DB_STRING)
        .then((res) => {
            console.log("Data Base connected")
        })
        .catch((err) => {
            console.log(err)
        })
}