// imports
const express = require("express");
const createUser = require("../../api/users/controllers/createUser");
const updateUser = require("../../api/users/controllers/updateUser");
const checkUser = require("../../api/users/controllers/checkUser");

// create router
const router = express.Router();

// routes
router.post("/users", createUser);
router.post("/checkUserExists", checkUser);
router.patch("/users/:email", updateUser);

module.exports = router;
