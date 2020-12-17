import dotenv from 'dotenv'
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import session from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';

// Импорт маршрутов.
import signinRouter from './src/routes/signin.js';
import signupRouter from './src/routes/signup.js';
import passports from './src/routes/passport.js';
dotenv.config()
const app = express();
import fetch from "node-fetch";


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


app.use(
  cors({
    origin: 'http://localhost:3001',
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
app.use('/user',checkAuth, signupRouter);

app.get('/', checkAuthentication, (req, res) => {
  res.send("Test")
})

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})
