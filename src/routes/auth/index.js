// imports
const express = require("express");
const authCheck = require("../../api/authCheck/controllers/authCheck");
const googleAuthCheck = require("../../api/authCheck/controllers/googleAuthCheck");

// create router
const router = express.Router();

// routes
router.post("/login", authCheck);

router.post("/google-login", googleAuthCheck);

module.exports = router;
