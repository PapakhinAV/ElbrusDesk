import express from 'express';
import passport from 'passport';


const router = express.Router();

router
  .route('/signin')
  // Аутентификация пользователя
  .post(
    passport.authenticate('local'),
    function (req, res) {
      console.log(req.user);
      res.json(req.user._id);
    });

export default router
// export default router
