// import jwt
const jwt = require("jsonwebtoken");
// import dotenv
require("dotenv").config();

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.token_secret, { expiresIn: "1hr" });
};

module.exports = generateToken;
