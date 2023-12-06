import Result from '../models/resultSchema.js'

export const ChemistryResult = async (req, res) => {
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const PhysicsResult = async (req, res) => {
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const BiologyResult = async (req, res) => {
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const SaveChemistryResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        Result.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
}

export const SavePhysicsResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        Result.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
}

export const SaveBiologyResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        Result.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result saved successfully" })
        })

    } catch (error) {
        res.json({ error })
    }
}