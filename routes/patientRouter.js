const patientController = require('../controllers/patientController');

const router = require('express').Router();

router.post('/addPatient', patientController.AddPatient);
router.get('/getAllPatients', patientController.getAllPatients);

router.get('/:id', patientController.getOnePatient);
router.put('/:id', patientController.UpdatePatient);
router.delete('/:id', patientController.DeletePatient);

module.exports = router;
