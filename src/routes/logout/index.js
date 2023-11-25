// imports
const express = require("express");
const logout = require("./../../api/authentication/controllers/logout");

const router = express.Router();

router.get("/logout", logout);

module.exports = router;
