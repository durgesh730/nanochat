import jwt from "jsonwebtoken";
import userdb from "../models/userSchema.js";

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        const verifytoken = jwt.verify(token, process.env.KEY_SECRET)

        const rootUser = await userdb.findOne({ _id: verifytoken._id });

        if (!rootUser) {
            throw new Error("user not found")
        }
        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).json({ status: 401, message: "Unauthorized no token provide" })
    }
}

export default authenticate;