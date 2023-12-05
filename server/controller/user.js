import Userdb from "../models/userSchema.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';

const keysecret = "durgeshchaudharydurgeshchaudhary";

// email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "durgeshchaudhary020401@gmail.com",
        pass: "lqfxwpogsaocehjc"
    }
})

export const UserRegister = async (req, res) => {
    const { fname, email, password } = req.body;

    if (!fname || !email || !password) {
        return res.status(400).json({ error: "Please fill all details." });
    }
    try {
        const preuser = await Userdb.findOne({ email: email });
        if (preuser) {
            return res.status(409).json({ error: "This email is already registered." });
        }

        const finalUser = new Userdb({
            fname, email, password
        });
        const storeData = await finalUser.save();
        return res.status(201).json({ status: 201, storeData });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
}

export const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({ error: "Please fill all details." });
    }

    try {
        const userValid = await Userdb.findOne({ email: email });

        if (!userValid) {
            return res.status(401).json({ error: "Email does not exist." });
        }

        const isMatch = await bcrypt.compare(password, userValid.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Password not correct." });
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
            token,
            msg: "Login Successfully"
        };

        return res.status(200).json({ status: 200, result });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error." });
    }
}

export const ValidUser = async (req, res) => {
    try {
        const ValidUserOne = await Userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
}

export const GetPerticulerUser = async (req, res) => {
    try {
        const user = await Userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, user });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
}

export const GetAllUser = async (req, res) => {
    try {
        const users = await Userdb.find();
        res.status(201).json({ result: users })
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
}

export const UserLogout = async (req, res) => {
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
}

export const SendPasswordLink = async (req, res) => {

    const { email } = req.body;

    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const userfind = await Userdb.findOne({ email: email });

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret,
            {
                expiresIn: "1d"
            })
        const setusertoken = await Userdb.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true })

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
}

export const VerfiyUser = async (req, res) => {
    const { id, token } = req.params;

    try {
        const validuser = await Userdb.findOne({ _id: id, verifytoken: token });

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

}

export const ChangePassword = async (req, res) => {
    const { id, token } = req.params;

    const { password } = req.body;

    try {

        const validuser = await Userdb.findOne({ _id: id, verifytoken: token });

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
}