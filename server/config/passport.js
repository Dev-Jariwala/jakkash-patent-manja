// config/passport.js
import passport from "passport";
import passportLocal from "passport-local";
import { query } from "../utils/query.js";
const LocalStrategy = passportLocal.Strategy;

passport.use(
  "local",

  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async function (username, password, done) {
      try {
        const [user] = await query(
          "SELECT * FROM users WHERE username = $1",
          [username]
        );
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (error) {
        console.error(error);
        return done(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.user_id);
});

passport.deserializeUser(async function (user_id, done) {
  try {
    const [user] = await query("SELECT * FROM users WHERE user_id = $1", [
      user_id,
    ]);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
