const express = require('express');
const router = express.Router(); 
const Controller = require('../controllers/examResult.controller')

const authValidation = require('../middleware/auth');
router
    .get('/getMedicalExamResultPatient/:id', Controller.getMedicalExamResultPatient )
 
    .post('/',authValidation ,Controller.create )
    
module.exports = router;
