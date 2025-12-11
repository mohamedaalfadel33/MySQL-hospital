const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // s
};

//middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routes
const patientRouter = require('./routes/patientRouter');
app.use('/api/patients', patientRouter);

//testing
app.get('/', (req, res) => {
  res.json({ message: 'hello from api' });
});

//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
