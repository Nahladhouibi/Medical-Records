  const { MedicalHistory, MedicalHistorySchema } = require('./medicalHistory.model');
 const { ExamResult, ExamResultSchema } = require('./examResult.model');
 const { PrescribedMedications, PrescribedMedicationsSchema } = require('./prescribedMedications.model');
 const { Allergie, AllergieSchema } = require('./allergies.model');



function setupModels(sequelize) {
    MedicalHistory.init(MedicalHistorySchema, MedicalHistory.config(sequelize));
    ExamResult.init(ExamResultSchema, ExamResult.config(sequelize));
    PrescribedMedications.init(PrescribedMedicationsSchema, PrescribedMedications.config(sequelize));
    Allergie.init(AllergieSchema, Allergie.config(sequelize));
}

module.exports = setupModels;