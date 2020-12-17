import passportLocal from 'passport-local';
import User from '../models/user.module.js';
import bcrypt from 'bcrypt';

const LocalStrategy = passportLocal.Strategy;

function Passport(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email',
  },
    function (email, password, done) {

      User.findOne({ email }, function (err, user) {
        // console.log(user)
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {
            return done(null, user)
          } else {
            console.log('fail')
            return done(null, false)
          }
        })
      });
    }
  ));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

}
export default Passport
