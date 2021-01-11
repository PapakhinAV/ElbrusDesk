import dotenv from 'dotenv'
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import session from 'express-session';
import mongoStore from 'connect-mongo';
import passport from 'passport';
import path from 'path'
import { checkAuthentication, checkAuth } from "./src/authMidlewear.js"
import GroupList from './src/models/groupList.js'
import PostList from './src/models/postList.js'
import User from './src/models/user.module.js'
// import NewPost from './src/models/postList'


//Для парсинга новостей
import axios from "axios"
import cheerio from "cheerio"

// Импорт маршрутов.
import signinRouter from './src/routes/signin.js';
import signupRouter from './src/routes/signup.js';
import passports from './src/routes/passport.js';
import authRouter from "./src/routes/auth.js"
import logoutRouter from "./src/routes/logout.js"
import uploadRouter from "./src/routes/upload.js"
import userPicAddRouter from "./src/routes/userPicAdd.js"
import deleteUserPicRouter from "./src/routes/deleteUserPic.js"
import groupslistRouter from "./src/routes/groupslist.js"
import postlistRouter from "./src/routes/postlist.js"
import newpostRouter from "./src/routes/newpost.js"
import deletePostRouter from "./src/routes/deletePost.js"
import parthNewsRouter from "./src/routes/parthNews.js"
import HomeeRouter from "./src/routes/Homee.js"
import EditRouter from "./src/routes/Edit.js"
import students_list_in_groupRouter from "./src/routes/students_list_in_group.js"
import user_pageRouter from "./src/routes/user_page.js"
import AddInfoForAdminRouter from "./src/routes/AddInfoForAdmin.js"
import deleteUserRouter from "./src/routes/deleteUser.js"
import deleteGroupRouter from "./src/routes/deleteGroup.js"
import addNewGroupRouter from "./src/routes/addNewGroup.js"
import editGroupRouter from "./src/routes/editGroup.js"
import loadAllCoordinatseRouter from "./src/routes/loadAllCoordinatse.js"
import YanPageRouter from "./src/routes/YanPage.js"



import fileUpload from 'express-fileupload';


dotenv.config()

const app = express();

// app.use(express.static('public')); //to access the files in public folder
// app.use(cors()); // it enables all cors requests
app.use(fileUpload());

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
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.env.PWD, 'public')));
// app.use('/*', express.static(path.join(process.env.PWD, '/')));


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



// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/user', checkAuth, signinRouter);
app.use('/user', checkAuth, signupRouter);
app.use("/auth", authRouter);
app.use("/logout", logoutRouter);
// Загрузка файлов на бэк
app.use("/upload", uploadRouter);
// Загрузка фото юзера
app.use("/userPicAdd", userPicAddRouter);
app.use("/deleteUserPic", deleteUserPicRouter);
app.use("/groupslist", checkAuthentication, groupslistRouter);
app.use("/postlist", postlistRouter);
app.use("/newpost", newpostRouter);
//Удаление постов
app.use("/deletePost", deletePostRouter);
app.use("/parthNews", parthNewsRouter);
//Получаем данные для профиля
app.use("/Homee", HomeeRouter);
app.use("/Edit", EditRouter);
app.use("/students_list_in_group", students_list_in_groupRouter);
app.use("/user_page", user_pageRouter);
//запрос данных для администратора
app.use("AddInfoForAdmin/", AddInfoForAdminRouter);
//Удаление пользователя
app.use("/deleteUser", deleteUserRouter);
//Удаление группы
app.use("/deleteGroup", deleteGroupRouter);
//Добавление новой группы
app.use("/addNewGroup", addNewGroupRouter);
//Редактирование группы
app.use("/editGroup", editGroupRouter);
app.use("/loadAllCoordinatse", loadAllCoordinatseRouter);
app.use("/YanPage", YanPageRouter);



//root необходимо опустить в самый конец файла чтоб не было конфликтов 
const root = path.join(process.env.PWD, '../', 'build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});



app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})

