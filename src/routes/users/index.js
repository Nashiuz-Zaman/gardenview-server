// imports
const express = require("express");
const createUser = require("./../../api/userCreation/controllers/userCreation");
const checkUserExists = require("../../api/checkUserExists/controller/checkUserExists");

// create router
const router = express.Router();

// routes
router.post("/users", createUser);

router.post("/checkUserExists", checkUserExists);

module.exports = router;
