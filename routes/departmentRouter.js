const departmentController = require('../controllers/departmentController');

const router = require('express').Router();

router.post('/addDepartment', departmentController.addDepartment);
router.get('/getAllDepartments', departmentController.getAllDepartments);

router.get('/:id', departmentController.getOneDepartment);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;