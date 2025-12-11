const doctorController = require('../controllers/doctorController');

const router = require('express').Router();

router.post('/addDoctor', doctorController.addDoctor);
router.get('/getAllDoctors', doctorController.getAllDoctors);

router.get('/:id', doctorController.getOneDoctor);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
