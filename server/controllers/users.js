// controller/users.js
import "../logger.js";
import winston from "winston";
import passport from "passport";
import jwt from "jsonwebtoken";
import { query } from "../utils/query.js";

// create table users(
// 	sr_no serial primary key,
// 	user_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
// 	username varchar(50) not null unique,
// 	password varchar(255) not null
// );

const errorLogger = winston.loggers.get("error-logger");
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [newUser] = await query(
      "insert into users ( username, password) values ($1, $2) returning *",
      [username, password]
    );
    if (!newUser) {
      throw new Error("Failed to register user");
    }
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    errorLogger.error(error);
    console.log(error);
    res.status(500).json({ message: error.message, error });
  }
};
export const signupUser = (req, res, next) => {
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
            // expiresIn: 60 * 60,
          }
        );
        return res.json({
          token,
        });
      });
    })(req, res, next);
  } catch (error) {
    errorLogger.error(error);
    console.log(error);
    res.status(500).json({ message: error.message, error });
  }
};
