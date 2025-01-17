const { models } = require('../config/sequelize');

class PatientService { 
  
    constructor() {}

    async find() {
      const res = await models.User.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.User.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.User.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.User.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    } 

    async findByEmail(email) {
      const res = await models.User.findOne({ where: { email } });
      return res;
    }
  
  }
  
  module.exports = PatientService;