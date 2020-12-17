import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const router = express.Router();

// function serializeUser(user) {
//     return {
//       id: user.id,
//       username: user.username,
//     };
//   }

router
  .route('/signup')
  // Регистрация пользователя
  .post(async (req, res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>.');
    const { username, password, email } = req.body;
    try {
      // Мы не храним пароль в БД, только его хэш
      const saltRounds = Number(process.env.SALT_ROUNDS ?? 10);
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        username,
        password: hashedPassword,
        email,
      });
      //   req.session.user = serializeUser(user);
    } catch (err) {
      console.error(err);
      return res.status(401).end();
    }
    return res.end();
  });

// export default router
export default router
