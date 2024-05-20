const express = require('express'); 

const medicalHistoryRouter = require('./medicaHistory.route');
const examResultRouter = require('./examResult.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
   router.use('/medicalHistory', medicalHistoryRouter);
   router.use('/examResult', examResultRouter);
}

module.exports = routerApi;