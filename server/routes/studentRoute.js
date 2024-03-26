import express from "express";
import { Counselling, CounsellingForm } from "../controller/student.js";

const Student = express.Router();

// student counselling
Student.post('/studentform', CounsellingForm);
Student.get('/student/counselling', Counselling)

export default Student