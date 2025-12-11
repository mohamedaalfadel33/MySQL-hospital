const db = require('../models');

const Patient = db.patients;

const AddPatient = async (req, res) => {
  let info = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    gender: req.body.gender,
  };
  const patient = await Patient.create(info);
  res.status(200).send(patient);
  console.log(patient);
};

const getAllPatients = async (req, res) => {
  let patients = await Patient.findAll({
    attributes: [
      'id',
      'firstName',
      'lastName',
      'email',
      'phone',
      'address',
      'gender',
    ],
  });
  res.status(200).send(patients);
};

const getOnePatient = async (req, res) => {
  let id = req.params.id;
  let patient = await Patient.findOne({
    where: { id: id },
  });
  res.status(200).send(patient);
};

const UpdatePatient = async (req, res) => {
  let id = req.params.id;

  const patient = await Patient.update(req.body, {
    where: { id: id },
  });
  res.status(200).send(patient);
};

const DeletePatient = async (req, res) => {
  let id = req.params.id;
  await Patient.destroy({
    where: { id: id },
  });
  res.status(200).send('Patient deleted');
};




module.exports = {
  AddPatient,
  getAllPatients,
  getOnePatient,
  UpdatePatient,
  DeletePatient,
};
