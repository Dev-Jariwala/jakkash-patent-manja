// app.js
require("dotenv").config();

const passport = require("./config/passport");
const session = require("express-session");
const cors = require("cors");

// importing routes
const userRoutes = require("./routes/users");
const collectionRoutes = require("./routes/collection");
const productRoutes = require("./routes/products");
const stockRoutes = require("./routes/stocks");
const billRoutes = require("./routes/bills");
const express = require("express");
const app = express();
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/imgs", express.static("uploads/imgs"));
app.use("/api/users", userRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/bills", billRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
