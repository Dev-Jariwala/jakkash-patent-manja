const express = require("express");
const { validateCreateBill } = require("../validators/bills");
const { createBill } = require("../controllers/bills");
const router = express.Router();

router.post("/", validateCreateBill, createBill);

module.exports = router;
