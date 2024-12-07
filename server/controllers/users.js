// controller/users.js
const db = require("../db");
require("../logger");
const winston = require("winston");
const errorLogger = winston.loggers.get("error-logger");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// exports.registerUser = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user_id = `user_` + Date.now();
//     console.log(user_id, username, password);
//     await db.query(
//       "insert into users (user_id, username, password) values (?, ?, ?)",
//       [user_id, username, password]
//     );
//     res.status(201).json({
//       message: "User registered successfully",
//       user: { user_id, username, password },
//     });
//   } catch (error) {
//     errorLogger.error(error);
//     res.status(500).json({ message: error.message, error });
//   }
// };
exports.signupUser = (req, res, next) => {
  try {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) return res.status(400).json(err);
      if (!user) return res.status(401).json({ message: "User not found" });

      req.login(user, { session: false }, (err) => {
        if (err) return res.status(400).json(err);

        const token = jwt.sign(
          { user_id: user.user_id, username: user.username },
          process.env.JWT_SECRET,
          {
            expiresIn: 60 * 60,
          }
        );
        return res.json({
          token,
        });
      });
    })(req, res, next);
  } catch (error) {
    errorLogger.error(error);
    res.status(500).json({ message: error.message, error });
  }
};
