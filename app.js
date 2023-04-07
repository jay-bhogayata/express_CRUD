require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

const app = express();

// Initializing connection to DB
connectToDB();

app.use("/", userRouter);

module.exports = app;
