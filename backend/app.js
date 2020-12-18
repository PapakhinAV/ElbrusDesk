import dotenv from 'dotenv'
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import session from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import path from 'path'

import GroupList from './src/models/groupList.js'
import User from './src/models/user.module.js'

//Для парсинга новостей
import axios from "axios"
import cheerio from "cheerio"

// Импорт маршрутов.
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
    return res.sendStatus(401)
  }
  else next()
}

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/user', checkAuth, signinRouter);
app.use('/user', checkAuth, signupRouter);

app.get('/auth/github',
  passport.authenticate('github', {
    scope: ['user:email']
  }));

app.get('/auth/github/callback',
  passport.authenticate('github'), function (req, res) {
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", req.user);
    res.redirect('/Home')
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.sendStatus(200);
});

app.get('/groupslist', async (req, res) => {
  const groupList = await GroupList.find()
  return res.json(groupList)
})

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



app.get('/students_list_in_group/:id', async (req, res) => {
  let idGroup = req.params.id
  console.log(idGroup);

  if (idGroup) {
    const listOfPeopleInGroup = await User.find({ stydyGroup: [idGroup] })
    console.log(listOfPeopleInGroup);
    return res.status(200).json(listOfPeopleInGroup)
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

