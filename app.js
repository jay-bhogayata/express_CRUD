require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");

const app = express();

// Initializing connection to DB
connectToDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
