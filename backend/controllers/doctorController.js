const db = require('../models');

const Doctor = db.doctors;

const addDoctor = async (req, res) => {
  let info = {
    Name: req.body.Name,
    specialty: req.body.specialty,
  };

  const doctor = await Doctor.create(info);
  res.status(200).send(doctor);
};

const getAllDoctors = async (req, res) => {
  let doctors = await Doctor.findAll({
    attributes: ['id', 'Name', 'specialty'],
  });
  res.status(200).send(doctors);
};

const getOneDoctor = async (req, res) => {
  let id = req.params.id;
  let doctor = await Doctor.findOne({
    where: { id: id },
  });
  res.status(200).send(doctor);
};

const updateDoctor = async (req, res) => {
  let id = req.params.id;

  const doctor = await Doctor.update(req.body, {
    where: { id: id },
  });
  res.status(200).send(doctor);
};

const deleteDoctor = async (req, res) => {
  let id = req.params.id;
  await Doctor.destroy({
    where: { id: id },
  });
  res.status(200).send('Doctor deleted');
};

module.exports = {
  addDoctor,
  getAllDoctors,
  getOneDoctor,
  updateDoctor,
  deleteDoctor,
};
