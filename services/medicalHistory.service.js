const { models } = require('../config/sequelize');

class PatientService { 
  
    constructor() {}

    async find() {
      const res = await models.MedicalHistory.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.MedicalHistory.findByPk(id);
      return res;
    }

    async findPatientHistory(patientID) {
      console.log(patientID);
      const res = await models.MedicalHistory.findAll({where:{patientID}});
      return res;
    }

    async create(data) {
      const res = await models.MedicalHistory.create(data);
      return res;
    }

  
  }
  
  module.exports = PatientService;