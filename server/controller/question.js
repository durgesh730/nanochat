import Biology from "../models/BioSchema.js"
import Question from "../models/questionSchema.js"

// /  insert questions from database folder
import questions, { answers } from '../database/data.js'
import Bioquestions, { Bioanswers } from '../database/Bioquestion.js'
import Phyquestions, { Phyanswers } from '../database/Phyquestion.js'

export const insertquestion = async (req, res) => {
    try {
        Question.insertMany({ questions, answers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
}

export const BiologyInsertquestion = async (req, res) => {
    try {
        Biology.insertMany({ questions: Bioquestions, answers: Bioanswers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
}

export const PhyInsertQuestion = async (req, res) => {
    try {
        Physics.insertMany({ questions: Phyquestions, answers: Phyanswers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
}

export const Getquestions = async (req, res) => {
    try {
        const q = await Question.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
}

export const FindPhyquestions = async (req, res) => {
    try {
        const q = await Physics.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
}

export const FindBioquestions = async (req, res) => {
    try {
        const q = await Biology.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
}