// routes/users.js
import express from "express";
import * as userControllers from '../controllers/users.js';
const router = express.Router();

// create user
router.post("/", userControllers.signupUser);
router.post("/register", userControllers.registerUser);

export default router;
