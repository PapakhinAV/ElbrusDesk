import express from 'express';
import passport from 'passport';


const router = express.Router();

router.get('/github',
  passport.authenticate('github', {
    scope: ['user:email']
  }));

router.get('/github/callback',
  passport.authenticate('github'), function (req, res) {
    res.redirect(`/Home/${req.user.id}`)
  });

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile']
  }));

router.get('/google/callback',
  passport.authenticate('google'), function (req, res) {
    // res.json({id: req.user.id})
    res.redirect(`/Home/${req.user.id}`)
  });

export default router
