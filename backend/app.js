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


import fileUpload from 'express-fileupload';


dotenv.config()

const app = express();

app.use(express.static('public')); //to access the files in public folder
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
// app.use(express.static(path.join(__dirname, 'public')));


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
  // console.log(req.isAuthenticated())
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
    // console.log(req.user.id);
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





app.post('/upload', (req, res) => {

  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  // accessing the file
  const myFile = req.files.file;

  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
})




app.get('/groupslist', checkAuthentication, async (req, res) => {
  const groupList = await GroupList.find()
  return res.json(groupList)
})



// app.get('/postlist', async (req, res) => {
//   const postList = await PostList.find()
//   // postList.reverse()
//   return res.json(postList)
// })

// app.post('/newpost', async (req, res) => {

app.get('/postlist/:id', async (req, res) => {
  const id = req.params.id
  const postList = await PostList.find({ authorID: id })
  return res.json(postList)
})

app.post('/newpost/:id', async (req, res) => {
  // console.log(req.body);
  // console.log('!)@&*#&(*#&*(#(*');
  const id = req.params.id

  const { title, text } = req.body;
  const addNewPost = new PostList({
    title: title,
    text: text,
    authorID: id
  })
  await addNewPost.save()
  const sessionUser = req.user.id;
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

//Удаление постов
app.get("/deletePost/:id", async (req, res) => {
  const id = req.params.id
  await PostList.findByIdAndDelete(id)
  res.sendStatus(200)
  await User.filter((el) => (el._id !== id))
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


app.post('/Edit/:id', async (req, res) => {
  let idUserEdit = req.params.id
  let userOne = await User.findById({ _id: `${idUserEdit}` })
  let { firstname,
    surname,
    tel,
    city,
    telegram,
    gitHub,
    linkidIn,
    instagram,
		vk, selectIdGroup, selectIdDelete } = req.body

  if (firstname ||
    surname ||
    tel ||
    city ||
    telegram ||
    gitHub ||
    linkidIn ||
    instagram ||
		vk || 
		selectIdGroup || selectIdDelete) {
    if (firstname) {
      await User.findByIdAndUpdate(idUserEdit, { firstname: firstname }, function (err, firstname) {
        res.status(200)
      })
    }
    if (surname) {
      await User.findByIdAndUpdate(idUserEdit, { surname: surname }, function (err, surname) {
        res.status(200)
      })
    }
    if (tel) {
      await User.findByIdAndUpdate(idUserEdit, { tel: tel }, function (err, tel) {
        res.status(200)
      })
    }
    if (city) {
      await User.findByIdAndUpdate(idUserEdit, { city: city }, function (err, city) {
        res.status(200)
      })
    }
    if (telegram || linkidIn || instagram || vk) {
      if (telegram) {
				await User.findByIdAndUpdate(idUserEdit, { telegram: telegram }, function (err, telegram) {
					res.status(200)
				})
      }
      if (linkidIn) {
        await User.findByIdAndUpdate(idUserEdit, { linkidIn: linkidIn }, function (err, linkidIn) {
					res.status(200)
				})
      }
      if (instagram) {
				await User.findByIdAndUpdate(idUserEdit, { instagram: instagram }, function (err, instagram) {
					res.status(200)
				})      }
      if (vk) {
				await User.findByIdAndUpdate(idUserEdit, { vk: vk }, function (err, vk) {
					res.status(200)
				})      }
    }
    if (gitHub) {
      await User.findByIdAndUpdate(idUserEdit, { gitHub: gitHub }, function (err, gitHub) {
        res.status(200)
      })
		}
    if (selectIdGroup) {
      selectIdGroup.map(el => {
        if (!userOne.stydyGroup.includes(el.value)) {
          userOne.stydyGroup.push(el.value)
        }
      })
      await User.findByIdAndUpdate(idUserEdit, { stydyGroup: userOne.stydyGroup })
		}
	// 	if (selectIdDelete) {
	// 		userOne.stydyGroup.map(el=> (
	// 			selectIdDelete.map(item =>( item))
  // ))
    //   await User.findByIdAndUpdate(idUserEdit, { stydyGroup: userOne.stydyGroup })
    // }
  return res.sendStatus(200)
  }
  return res.sendStatus(406)
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
  const dataForAdmin = { admin: req.user.admin, users: allUsers, groups: allGroups }
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

