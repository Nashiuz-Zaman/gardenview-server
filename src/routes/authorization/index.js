// imports
const express = require("express");
const loginRoleCheck = require("../../api/loginRoleCheck/controllers/loginRoleCheck");
const googleLoginCheck = require("../../api/googleLoginCheck/googleLoginCheck");
const roleCheck = require("../../api/roleCheck/controllers/roleCheck");

// create router
const router = express.Router();

// routes
router.post("/login", loginRoleCheck);

router.post("/google-login", googleLoginCheck);

router.post("/role", roleCheck);

module.exports = router;
