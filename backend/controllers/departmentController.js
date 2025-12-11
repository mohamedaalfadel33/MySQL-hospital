const db = require('../models');

const Department = db.departments;

const addDepartment = async (req, res) => {
  let info = {
    Name: req.body.Name,
  };

  const department = await Department.create(info);
  res.status(200).send(department);
};

const getAllDepartments = async (req, res) => {
  const departments = await Department.findAll();
  res.status(200).send(departments);
};

const getOneDepartment = async (req, res) => {
  let id = req.params.id;
  let department = await Department.findOne({
    where: { id: id },
  });
  res.status(200).send(department);
};

const updateDepartment = async (req, res) => {
  let id = req.params.id;

  const department = await Department.update(req.body, {
    where: { id: id },
  });
  res.status(200).send(department);
};

const deleteDepartment = async (req, res) => {
  let id = req.params.id;
  await Department.destroy({
    where: { id: id },
  });
  res.status(200).send('Department deleted');
};

module.exports = {
  addDepartment,
  getAllDepartments,
  getOneDepartment,
  updateDepartment,
  deleteDepartment,
};
