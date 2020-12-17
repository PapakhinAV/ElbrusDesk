const GroupList = require('../models/gameList.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/elbruslife', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });

const groupList = [{
	name: "Лисы",
	avatar: "https://s.tcdn.co/b7a/1fc/b7a1fcc6-af74-34d0-bfde-69f003ae272c/2.png",
	dateStart: '01.10.20',
	dateEnd: "25.12.20",
    },
    {
			name: "Медведи",
			avatar: "https://www.cheltv.ru/wp-content/uploads/2018/05/Medved2G.jpg",
			dateStart: '06.07.20',
			dateEnd: "25.09.20",
    }
];

GroupList.insertMany(groupList).then(() => {
    mongoose.connection.close();
});
