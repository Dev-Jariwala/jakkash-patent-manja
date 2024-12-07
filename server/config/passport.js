// config/passport.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../db");

passport.use(
  "local",

  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async function (username, password, done) {
      try {
        const [[user]] = await db.query(
          "SELECT * FROM users WHERE username = ?",
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
    const [[user]] = await db.query("SELECT * FROM users WHERE user_id = ?", [
      user_id,
    ]);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
