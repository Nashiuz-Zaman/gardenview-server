// imports
const express = require("express");
const createCookieToken = require("../../api/jwt/controllers/createCookieToken");

const router = express.Router();

router.get("/jwt", createCookieToken);

module.exports = router;
