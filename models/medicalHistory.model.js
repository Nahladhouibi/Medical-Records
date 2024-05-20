const { Model, DataTypes, Sequelize } = require('sequelize');

const MedicalHistory_TABLE = 'medicalHistorys';

class MedicalHistory extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MedicalHistory_TABLE,
            modelName: 'MedicalHistory',
            timestamps: true
        }
    }
}

const MedicalHistorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
     
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'description'
    },
    
    patientID: {
        type: DataTypes.INTEGER,  
        allowNull: false,
        field: 'patientID'
    },
    professional: {
        type: DataTypes.STRING,  
        allowNull: false,
        field: 'patientID'
    }
     
}

module.exports = { MedicalHistory, MedicalHistorySchema };