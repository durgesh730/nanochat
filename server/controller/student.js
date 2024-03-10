import Form from '../models/formSchema.js'

export const CounsellingForm = async (req, res) => {
    const requiredFields = ['AIQRank', 'phonenumber', 'category'];

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
}

export const Counselling = async (req, res) => {
    try {
        const users = await Form.find();
        res.status(201).json({ result: users })
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
}