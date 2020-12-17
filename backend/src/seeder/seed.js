const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();
mongoose.connect(process.env.DB_CONN, { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });

const users = [{
  name: 'Burbu',
  surname: 'Kuular',
  email: 'mr.burbu@mail.ru',
  password: 'qwerty',
  gender: 'мужской',
  birthday: new Date(),
  status: 'студент',
},
{
  name: 'Mike',
  surname: 'Fez',
  email: 'mr.mike@mail.ru',
  password: 'qwerty',
  gender: 'мужской',
  birthday: new Date(),
  status: 'студент',
},
{
  name: 'Renzo',
  surname: 'Ruiz',
  email: 'mr.renzo@mail.ru',
  password: 'qwerty',
  gender: 'мужской',
  birthday: new Date(),
  status: 'студент',
}];

const seed = async () => {
  await mongoose.connection.dropDatabase();
  User.insertMany(users).then(() => {
    mongoose.connection.close();
    console.log('DB is seeded!');
  }).catch(() => {
    console.log('Duplicate!');
    mongoose.connection.close();
  });
}

seed();
