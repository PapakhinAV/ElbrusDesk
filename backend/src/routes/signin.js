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
      res.json({id:req.user._id, admin:req.user.admin});
    });

export default router
// export default router
