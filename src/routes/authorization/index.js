// imports
const express = require("express");
const loginRoleCheck = require("../../api/loginRoleCheck/controllers/loginRoleCheck");
const googleLoginCheck = require("../../api/googleLoginCheck/googleLoginCheck");

// create router
const router = express.Router();

// routes
router.post("/login", loginRoleCheck);

router.post("/google-login", googleLoginCheck);

module.exports = router;
