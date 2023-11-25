const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddlewares;
