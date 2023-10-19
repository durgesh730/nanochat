import express from "express";
const router = express.Router();
import bcrypt from 'bcryptjs';
import authenticate from "../middleware/authenticate.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken"

//  models 
import userdb from "../models/userSchema.js";
import Form from "../models/formSchema.js"
import question from '../models/questionSchema.js'
import Physics from "../models/PhySchema.js";
import Biology from "../models/BioSchema.js";
import Result from "../models/resultSchema.js";
import BioResultSchema from "../models/BioResultSchema.js";
import PhyResultSchema from "../models/PhyResultSchema.js";

//  insert questions from database folder
import questions, { answers } from '../database/data.js'
import Bioquestions, { Bioanswers } from '../database/Bioquestion.js'
import Phyquestions, { Phyanswers } from '../database/Phyquestion.js'


const keysecret = "durgeshchaudharydurgeshchaudhary";

// email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "durgeshchaudhary020401@gmail.com",
        pass: "lqfxwpogsaocehjc"
    }
})

//user sign up API
router.post('/register', async (req, res) => {
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        return res.status(400).json({ error: "Please fill in all the details." });
    }

    if (password !== cpassword) {
        return res.status(400).json({ error: "Passwords do not match." });
    }

    try {
        const preuser = await userdb.findOne({ email: email });
        if (preuser) {
            return res.status(409).json({ error: "This email is already registered." });
        }

        const finalUser = new userdb({
            fname, email, password, cpassword
        });

        const storeData = await finalUser.save();
        return res.status(201).json({ status: 201, storeData });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
});


// user Login API and end points 

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all the details." });
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (!userValid) {
            return res.status(401).json({ error: "Invalid login details." });
        }

        const isMatch = await bcrypt.compare(password, userValid.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid login details." });
        }

        // Token generation
        const token = await userValid.generateAuthtoken();

        // Generate cookie
        res.cookie("usercookie", token, {
            expires: new Date(Date.now() + 9000000),
            httpOnly: true
        });

        const result = {
            userValid,
            token
        };

        return res.status(200).json({ status: 200, result });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
});

// user validation 

router.get("/validuser", authenticate, async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

// Get Users data 

router.get("/users/", authenticate, async (req, res) => {
    try {
        const user = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, user });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

// logout API and endl point

router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        })

        res.clearCookie("usercookie", { path: "/" });

        req.rootUser.save();

        res.status(201).json({ status: 201 })

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});


// student form API

router.post('/studentform', async (req, res) => {
    const requiredFields = ['fname', 'AIQRank', 'phonenumber', 'category'];

    for (let field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ error: "Please fill in all the required details." });
        }
    }

    try {
        const finalUser = new Form({ ...req.body });
        return res.status(201).json({ status: 201, storeData: await finalUser.save() });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "An internal error occurred." });
    }
});

// send email link for reset password 

router.post("/sendpasswordlink", async (req, res) => {

    const { email } = req.body;

    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const userfind = await userdb.findOne({ email: email });

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret,
            {
                expiresIn: "1d"
            })
        const setusertoken = await userdb.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true })

        if (setusertoken) {
            const mailOptions = {
                from: "durgeshchaudhary020401@gmail.com",
                to: email,
                subject: "sending email of password Reset",
                text: `this link valid for 2 minutes http://localhost:3000/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('error', error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent ", info.response);
                    res.status(201).json({ status: 201, message: "email send successfully" })
                }
            })
        }
    } catch (error) {
        res.status(201).json({ status: 201, message: "Invalid user" })
    }
})


//verify user for forgot password time

router.get("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    try {
        const validuser = await userdb.findOne({ _id: id, verifytoken: token });

        // verify user token 
        const verifyToken = jwt.verify(token, keysecret);

        if (validuser && verifyToken._id) {
            res.status(201).json({ status: 201, validuser })
        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }

});

// change password 

router.post("/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    const { password } = req.body;

    try {

        const validuser = await userdb.findOne({ _id: id, verifytoken: token });

        // verify user token 
        const verifyToken = jwt.verify(token, keysecret);

        if (validuser && verifyToken._id) {
            const newpassword = await bcrypt.hash(password, 12)

            // update user password
            const setnewuserpass = await userdb.findByIdAndUpdate({ _id: id }, { password: newpassword });

            setnewuserpass.save()  //save user
            res.status(201).json({ status: 201, setnewuserpass })

        } else {
            res.status(401).json({ status: 401, message: "user not exist" })
        }
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
})

//  neet routes endpoints 


// insert questions in database API ( chemistry,biology, physics )
router.post('/insertquestion', async (req, res) => {
    try {
        question.insertMany({ questions, answers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
})

router.post('/BioInsertQuestion', async (req, res) => {
    try {
        Biology.insertMany({ questions: Bioquestions, answers: Bioanswers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
})

router.post('/PhyInsertQuestion', async (req, res) => {
    try {
        Physics.insertMany({ questions: Phyquestions, answers: Phyanswers }, function (err, data) {
            res.json({ msg: "Data saved Successfuly" })
        })
    } catch (error) {
        res.json({ error })
    }
})


// GET question from database API (chemistry, physics, biology,  )

router.get('/getquestions', async (req, res) => {
    try {
        const q = await question.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
})

router.get('/Phyquestions', async (req, res) => {
    try {
        const q = await Physics.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
})

router.get('/Bioquestions', async (req, res) => {
    try {
        const q = await Biology.find()
        res.json(q);
    } catch (error) {
        res.json({ error })
    }
})


//  get result end point (chemistry, physics, bio) 

router.get('/result', async (req, res) => {
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
})

router.get('/PhyResult', async (req, res) => {
    try {
        const r = await PhyResultSchema.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
})

router.get('/BioResult', async (req, res) => {
    try {
        const r = await BioResultSchema.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
})


// POST result API ( chemistry  bio phy) 

router.post('/result', async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        Result.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
})

router.post('/PhyResult', async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        PhyResultSchema.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
})


router.post('/BioResult', async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        BioResultSchema.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
})


export default router;