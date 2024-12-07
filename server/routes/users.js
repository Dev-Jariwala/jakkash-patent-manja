// routes/users.js
const express = require("express");
const { signupUser } = require("../controllers/users");
const router = express.Router();

// create user
router.post("/", signupUser);

module.exports = router;
