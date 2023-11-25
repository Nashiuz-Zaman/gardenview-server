const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ejmezk0.mongodb.net/?retryWrites=true&w=majority`
  );

  console.log("database connected");
};

module.exports = connectDB;
