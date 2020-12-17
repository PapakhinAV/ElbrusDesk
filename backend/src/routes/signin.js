import express from 'express';
import passport from 'passport';


const router = express.Router();

router
  .route('/signin')
  // Аутентификация пользователя
  .post(
    passport.authenticate('local'),
    function (req, res) {
      res.sendStatus(200);
    });

export default router
// export default router