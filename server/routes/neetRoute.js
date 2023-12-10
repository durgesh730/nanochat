import express from 'express'
const Neet = express.Router();

// question controller import
import {
    BiologyInsertquestion,
    FindBioquestions,
    Getquestions,
    FindPhyquestions,
    insertquestion,
    PhyInsertQuestion
}
    from '../controller/question.js';

// result controller import    
import {
    BiologyResult,
    ChemistryResult,
    PhysicsResult,
    SaveBiologyResult,
    SaveChemistryResult,
    SavePhysicsResult
}
    from '../controller/result.js';

// Insert Questions ( chemistry,biology, physics )
Neet.post('/insertquestion', insertquestion)

Neet.post('/BioInsertQuestion', BiologyInsertquestion)

Neet.post('/PhyInsertQuestion', PhyInsertQuestion)


// GET question (chemistry, physics, biology,  )

Neet.get('/getquestions', Getquestions)

Neet.get('/Phyquestions', FindPhyquestions)

Neet.get('/Bioquestions', FindBioquestions)


//  get result end point (chemistry, physics, bio) 

Neet.get('/result', ChemistryResult)

Neet.get('/PhyResult', PhysicsResult)

Neet.get('/BioResult', BiologyResult)


// POST Save Result API ( chemistry  bio phy) 

Neet.post('/result', SaveChemistryResult)

Neet.post('/PhyResult', SavePhysicsResult)

Neet.post('/BioResult', SaveBiologyResult)


export default Neet