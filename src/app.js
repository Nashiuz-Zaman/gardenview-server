// import necessary packages
const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./db/connectDb");

// import routes
const userRoutes = require("./routes/users/index");
const loginRoleCheckRoutes = require("./routes/authorization/index");
const flatsRoutes = require("./routes/flats/index");
const announcementRoutes = require("./routes/announcements/index");
const agreementRoutes = require("./routes/agreementRequests/index");

// app setup
const app = express();
const port = process.env.PORT || 5000;

// basic common middleware for express.json, cors
applyMiddlewares(app);

// all the routes handling is here below
app.use(userRoutes);
app.use(loginRoleCheckRoutes);
app.use(flatsRoutes);
app.use(announcementRoutes);
app.use(agreementRoutes);

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
// const main = async () => {
//   await connectDB();
//   app.listen(port);
// };

// main();

module.exports = app;
