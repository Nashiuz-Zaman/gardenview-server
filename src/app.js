// import necessary packages
const express = require("express");
const cors = require("cors");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const app = express();
const port = process.env.PORT || 5000;

applyMiddlewares(app);

// test
app.get("/health", (req, res) => {
  res.send("Working properly");
});

// for all routes
app.all("*", (req, res, next) => {
  const error = new Error(`${req.url} is an invalid url`);
  error.status = 404;
  next(error);
});

// global error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

// set listener for port
app.listen(port);
