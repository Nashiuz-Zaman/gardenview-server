// imports
const express = require("express");
const loginRoleCheck = require("../../api/loginRoleCheck/controllers/loginRoleCheck");

// create router
const router = express.Router();

// routes
router.post("/login", loginRoleCheck);

module.exports = router;
