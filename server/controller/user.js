import Userdb from "../models/userSchema.js";

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