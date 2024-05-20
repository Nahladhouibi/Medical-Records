const { Model, DataTypes, Sequelize } = require('sequelize');

const Allergie_TABLE = 'allergies';

class Allergie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Allergie_TABLE,
            modelName: 'Allergie',
            timestamps: true
        }
    }
}

const AllergieSchema = {
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
    severity: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'severity'
    },
    symptoms: {
        type: DataTypes.STRING,  
        allowNull: false,
        field: 'symptoms'
    },
    patientID: {
        type: DataTypes.INTEGER,  
        allowNull: false,
        field: 'patientID'
    }
     
     
}

module.exports = { Allergie, AllergieSchema };