import dotenv from 'dotenv'
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import session from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import path from 'path'

import GroupList from './src/models/groupList.js'
import PostList from './src/models/postList.js'
import User from './src/models/user.module.js'
// import NewPost from './src/models/postList'


//Для парсинга новостей
import axios from "axios"
import cheerio from "cheerio"

// Импорт маршрутов.
// import newpostRouter from './src/routes/newpost.js';
import signinRouter from './src/routes/signin.js';
import signupRouter from './src/routes/signup.js';
import passports from './src/routes/passport.js';
import fetch from "node-fetch";



dotenv.config()

const app = express();



const PORT = process.env.PORT ?? 0

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
  (err) => {
    if (err) return console.log(err)
    console.log("Mongooseeee is conecting ON Atlas")
  });
const MongoStore = mongoStore(session);

const host =
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }));

// Подключение middleware, который парсит JSON от клиента
app.use(express.json());

// Подключение middleware, который парсит СТРОКУ или МАССИВ от клиента
app.use(express.urlencoded({ extended: true }))

app.use(session({
  name: app.get('session cookie name'),
  secret: '9ps58uy9aerfah48yuaergv45he8gjae',
  // Если true, сохраняет сессию, даже если она не поменялась
  resave: false,
  // Если false, куки появляются только при установке req.session
  saveUninitialized: false,
  cookie: {
    // В продакшне нужно "secure: true" для HTTPS
    secure: false, httpOnly: true, key: 'registration',
  },
  store: new MongoStore({ mongooseConnection: mongoose.createConnection(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }) }),
}));


app.use(passport.initialize());
app.use(passport.session());
passports(passport);


// Подключение middleware, который проверяет аунтифицирован пользователь на данной ручке или нет
function checkAuthentication(req, res, next) {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.sendStatus(401)
  }

}

// Подключение middleware, который не позволяет аунтифицированному пользователю переходить на страницу(ручку) регистрации и входа в систему
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(401).json(req.user._id)
  }
  else next()
}

// Подключаем импортированные маршруты с определенным url префиксом.
// app.use('/newpost', newpostRouter)
app.use('/user', checkAuth, signinRouter);
app.use('/user', checkAuth, signupRouter);

app.get('/auth/github',
  passport.authenticate('github', {
    scope: ['user:email']
  }));

app.get('/auth/github/callback',
  passport.authenticate('github'), function (req, res) {
    console.log(req.user.id);
    res.redirect(`/Home/${req.user.id}`)
  });

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  }));

app.get('/auth/google/callback',
  passport.authenticate('google'), function (req, res) {
    // res.json({id: req.user.id})
    // console.log(req.user.id);
    res.redirect(`/Home/${req.user.id}`)
  });

app.delete('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200);
});

app.get('/groupslist', checkAuthentication, async (req, res) => {
  const groupList = await GroupList.find()
  return res.json(groupList)
})


app.get('/postlist', async (req, res) => {
  const postList = await PostList.find()
  return res.json(postList)
})



app.post('/newpost', async (req, res) => {
  // console.log(req.body);
  // console.log('!)@&*#&(*#&*(#(*');
  const { title, text } = req.body;

  // console.log('Заголовок: ', title, 'Текст: ', text );
  const addNewPost = new PostList({
    title: title,
    text: text,
  })
  await addNewPost.save()
  const sessionUser = req.user.id;
  console.log(addNewPost._id);
  let user = await User.findById(sessionUser);
  user.post.push(addNewPost._id)
  await user.save()
  res.sendStatus(200)

//   console.log('Заголовок: ', title, 'Текст: ', text);
//   try {
//     const newuserpost = await PostList.create({
//       title,
//       text,
//     });
//     console.log(newuserpost);
//     return res.status(200).end();
//   } catch (err) {
//     console.error(err, '>>>>>>>>>>>>>>>>>>>>>>>>>');
//     return res.status(401).end();
//   }
  // return res.end();

}
);



app.get("/parthNews", async (req, res) => {
  const response = await axios('https://3dnews.ru/news');
  const result = response.data;
  //cheerio
  const $ = cheerio.load(result);
  const header = [];
  const news = [];
  $('a.entry-header > h1').each((i, element) => {
    const title = $(element).text();
    header.push(title);
  });
  $('div.cntPrevWrapper > p').each((i, element) => {
    const newsBody = $(element).text();
    news.push(newsBody);
  });
  const allData = header.map((element, i) => [element, news[i]]);
  const newAllDada = allData.slice(0, 15);
  res.json(newAllDada)
})

//получаем данные для профиля

// Поменял на /homee, потому что redirect на 128 строке попадает сразу на 170 и выдает json на фронте
app.get('/Homee/:id', checkAuthentication, async (req, res) => {

  // app.get('/Homee/:id', async (req, res) => {

  let idUser = req.params.id
  if (idUser) {
    const infoUser = await User.find({ _id: idUser }).populate('stydyGroup')
    // console.log(infoUser, '>>>>>>>>>>>>');
    return res.status(200).json(infoUser)
  }
  return res.sendStatus(406)
})

app.post('/Edit/:id', async (req, res)=>{
	let idUserEdit = req.params.id
		let userOne = await User.findById({_id: `${idUserEdit}`})
	let {	firstname,
		surname,
		tel,
		city,
		telegram,
		gitHub,
		linkidIn,
		instagram,
		vk} = req.body
		if(firstname ||
			surname ||
			tel ||
			city ||
			telegram ||
			gitHub ||
			linkidIn ||
			instagram ||
			vk){
  if(firstname){
		await User.findByIdAndUpdate(idUserEdit, {firstname: firstname}, function(err, firstname){
			res.status(200)
	})
	}
	if(surname){
		await User.findByIdAndUpdate(idUserEdit, {surname: surname }, function(err, surname){
			res.status(200)
	})
	}
	if(tel){
		await User.findByIdAndUpdate(idUserEdit, {tel: tel }, function(err, tel){
			res.status(200)
	})
	}
	if(city){
		await User.findByIdAndUpdate(idUserEdit, {city: city }, function(err, city){
			res.status(200)
	})
	}
	if(telegram || linkidIn || instagram || vk){

	if(telegram){
		userOne.social.push(`${telegram}`)
	}
	if(linkidIn){
		userOne.social.push(`${linkidIn}`)
	}
	if(instagram){
		userOne.social.push(`${instagram}`)
	}
	if(vk){
		userOne.social.push(`${vk}`)
	}
		await User.findByIdAndUpdate(idUserEdit, {social: userOne.social }, function(err, userOne){
			res.status(200)
	})
	}
	if(gitHub){
		userOne.social.push(`${gitHub}`)
		await User.findByIdAndUpdate(idUserEdit, {social: userOne.social }, function(err, userOne){
			res.status(200)
	})
	}
	res.sendStatus(200)
}
	res.sendStatus(406)
})

app.get('/students_list_in_group/:id', async (req, res) => {
  let idGroup = req.params.id
  if (idGroup) {
    const listOfPeopleInGroup = await User.find({ stydyGroup: idGroup }).populate('stydyGroup')
    return res.status(200).json(listOfPeopleInGroup)
  }
  return res.sendStatus(406)
})


//запрос данных для администратора
app.get("/AddInfoForAdmin", checkAuthentication, async (req, res) => {
  console.log('>>>>>>>>>>>>>>', req.user.admin);
  const allUsers = await User.find()
  const allGroups = await GroupList.find()
  const dataForAdmin = {admin: req.user.admin, users: allUsers, groups: allGroups }
  res.json(dataForAdmin)
})

//Удаление пользователя
app.get("/deleteUser/:id", async (req, res) => {
  const id = req.params.id
  await User.findByIdAndDelete(id)
  res.sendStatus(200)
})

//Удаление группы
app.get("/deleteGroup/:id", async (req, res) => {
  const id = req.params.id
  await GroupList.findByIdAndDelete(id)
  res.sendStatus(200)
})

//Добавление новой группы

app.post("/addNewGroup", async (req, res) => {
  const { name, city, avatar, dateStart, dateEnd } = req.body
  if (name.trim()) {
    const addGroup = new GroupList({
      name,
      city,
      avatar,
      dateStart,
      dateEnd,
    })
    await addGroup.save()
    return res.sendStatus(200)
  }
  return res.sendStatus(406)
})

//Редактирование группы
//Поиск:
app.get("/editGroup/:id", async (req, res) => {
  const id = req.params.id
  const EditDataGroup = await GroupList.findById(id)
  res.json(EditDataGroup)
})
//Сохранение:

app.post("/editGroup", async (req, res) => {
  const { name, city, avatar, dateStart, dateEnd } = req.body.newGroup
  if (name.trim()) {
    let curentGroup = await GroupList.findById(req.body.id)
    curentGroup.name = name
    curentGroup.city = city
    curentGroup.avatar = avatar
    curentGroup.dateStart = dateStart
    curentGroup.dateEnd = dateEnd
    await curentGroup.save()
    return res.sendStatus(200)
  }
  return res.sendStatus(406)
})

//root необходимо опустить в самый конец файла чтоб не было конфликтов 
const root = path.join(process.env.PWD, '../', 'build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})

