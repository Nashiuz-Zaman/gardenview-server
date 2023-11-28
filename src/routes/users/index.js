// imports
const express = require("express");
const createUser = require("./../../api/userCreation/controllers/userCreation");

const router = express.Router();

router.post("/users", createUser);

module.exports = router;
