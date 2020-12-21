import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.module.js';

const router = express.Router();

router
  .route('/signup')
  // Регистрация пользователя
  .post(async (req, res) => {
    console.log('<<<<<<<<<<<<<<<<<<<<<.');
    const { firstname, surname, password, email, tel } = req.body;
    console.log('Имя: ', firstname, 'Имя: ', surname, 'Имя: ', password, email, tel);
    try {
      // Мы не храним пароль в БД, только его хэш
      const saltRounds = Number(process.env.SALT_ROUNDS ?? 10);
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        firstname,
        surname,
        password: hashedPassword,
        email,
        tel,
        admin: false,
      });
      return res.status(200).end();
      //   req.session.user = serializeUser(user);
    } catch (err) {
      console.error(err, '>>>>>>>>>>>>>>>>>>>>>>>>>');
      return res.status(401).end();
    }
    return res.end();
  });

// export default router
export default router
