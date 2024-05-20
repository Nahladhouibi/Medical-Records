const { models } = require('../config/sequelize');

class ExamResultService { 
  
    constructor() {}

    async find() {
      const res = await models.ExamResult.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.ExamResult.findByPk(id);
      return res;
    }

    async findPatientExamResult(patientID) {
      console.log(patientID);
      const res = await models.ExamResult.findAll({where:{patientID}});
      return res;
    }

    async create(data) {
      const res = await models.ExamResult.create(data);
      return res;
    }

  
  }
  
  module.exports = ExamResultService;