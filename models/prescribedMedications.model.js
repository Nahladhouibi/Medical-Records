const { Model, DataTypes, Sequelize } = require('sequelize');

const PrescribedMedications_TABLE = 'prescribedMedications';

class PrescribedMedications extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PrescribedMedications_TABLE,
            modelName: 'PrescribedMedication',
            timestamps: true
        }
    }
}

const PrescribedMedicationsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    dosage: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'dosage'
    },
    frequency: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'frequency'
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'dateOfBirth'
    },
    patientID: {
        type: DataTypes.STRING,  
        allowNull: false,
        field: 'patientID'
    }
}

module.exports = { PrescribedMedications, PrescribedMedicationsSchema };