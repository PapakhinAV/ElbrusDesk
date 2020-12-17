require('dotenv').config()
const UserList = require('../models/user.module');
const mongoose = require('mongoose');


// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}
mongoose.connect(process.env.MONGO_DB,
	options, 
	(err) => { if (err) return console.log(err)
    console.log("Mongooseeee is conecting ON Atlas")
  });

const userList = [{
	name: "Alexsandra",
	surname: "Anisina",
	email: "honey@mail.ru",
	pass:"123456789",
	tel: "89130856872",
	stydyGroup: [{_id:"5fdb395c8f2c2763b6e43314",_id:"5fdb395c8f2c2763b6e43315"}],
	gitHub: "https://github.com/HoneyMS",
	city: 'Москва',
  birthday: "23.09.90"
    }
];

UserList.insertMany(userList).then(() => {
    mongoose.connection.close();
});
