import express from "express";
import { CounsellingForm } from "../controller/student.js";

const Student = express.Router();

// student counselling
Student.post('/studentform', CounsellingForm);


export default Student