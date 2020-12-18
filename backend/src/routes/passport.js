import passportLocal from 'passport-local';
import passportGithub2 from 'passport-github2';
import User from '../models/user.module.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const LocalStrategy = passportLocal.Strategy;
const GitHubStrategy = passportGithub2.Strategy;
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

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(async function () {

        let gituser = await User.findOne({ githubId: profile.id });
        console.log(gituser, 'user exists');
        // console.log(profile);

        if (!gituser) {
          gituser = new User({ githubId: profile.id, firstname: profile.username });
          await gituser.save();
          // console.log(gituser, 'user new');
        }

        return done(null, gituser);
      });
    }
  ));
  //Записывает юзера в сессию по id
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Находит юзера в БД по id, который записан в сессии
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

}
export default Passport
