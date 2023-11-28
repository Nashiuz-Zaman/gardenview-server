// import necessary packages
const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const verifyToken = require("./middlewares/verifyToken");
const connectDB = require("./db/connectDb");

// routing
const jwtRoute = require("./routes/jwt/");
// logout
const logoutRoute = require("./routes/logout/");
// user creation
const userCreationRoute = require("./routes/users/index");

const app = express();
const port = process.env.PORT || 5000;

// basic common middleware for express.json, cors, cookie-parser
applyMiddlewares(app);

// all the routes handling is here below

// create jwt token
app.use(jwtRoute);

// logout and delete cookie
app.use(logoutRoute);

// user creation route
app.use(userCreationRoute);

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

// this function connects to database and turns on the app
const main = async () => {
  await connectDB();
  app.listen(port);
};

main();
