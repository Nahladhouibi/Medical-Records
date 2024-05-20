const express = require('express');
const router = express.Router(); 
const Controller = require('../controllers/medicalHistory.controller')

const authValidation = require('../middleware/auth');
router.get('/getMedicalHistoryPatient/:id', Controller.getMedicalHistoryPatient )
router.get('/getMyMedicalHistory', Controller.getMyMedicalHistory )
router.post('/',authValidation ,Controller.create )
    
module.exports = router;
