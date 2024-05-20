const { Model, DataTypes, Sequelize } = require('sequelize');

const ExamResult_TABLE = 'ExamResultS';

class ExamResult extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ExamResult_TABLE,
            modelName: 'ExamResult',
            timestamps: true
        }
    }
}

const ExamResultSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    examType: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'examType'
    },
    result: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'result'
    },
    
    patientID: {
        type: DataTypes.STRING,  
        allowNull: false,
        field: 'patientID'
    },
    professional: {
        type: DataTypes.STRING,  
        allowNull: false,
        field: 'patientID'
    }



}

module.exports = { ExamResult, ExamResultSchema };