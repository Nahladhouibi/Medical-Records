const examResultService = require('../services/examResult.service');
const service = new examResultService();
const axios=require('axios')
const create = async ( req, res ) => {

    try { 
        console.log(req.body);
        console.log({...req.body,professional:req.payload.id});
        await service.create({...req.body,professional:req.payload.id})
        return res.status(200).json('Created successful');
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getMedicalExamResultPatient = async ( req, res ) => {
    try {
        const { id } = req.params;
        const exams = await service.findPatientHistory(id);
       
        const response = await Promise.all(exams.map(async (item) => {

            const pro = await axios.get(`http://localhost:8000/security/api/healthcareProfessional/${item.dataValues.professional}`);
            console.log(pro);
            return {
                createdAt: item.dataValues.createdAt,
                description: item.dataValues.description,
                id: item.dataValues.id,
                healthcareProfessional:pro.data.firstName +" " + pro.data.lastName
                 
            };
        }));

        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getMedicalExamResultPatient, update, _delete
};
