// app.js
import express from 'express';
import session from "express-session";
import cors from "cors";

import passport from "./config/passport.js";
import userRoutes from "./routes/users.js";
import collectionRoutes from "./routes/collection.js";
import productRoutes from "./routes/products.js";
import stockRoutes from "./routes/stocks.js";
import billRoutes from "./routes/bills.js";
import clientRoutes from "./routes/clients.js";
import purchaseRoutes from "./routes/purchases.js";
import analyticsRoutes from "./routes/analytics.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173'],
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
app.use("/api/clients", clientRoutes);
app.use("/api/collections", collectionRoutes, productRoutes, stockRoutes, billRoutes, purchaseRoutes, analyticsRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
