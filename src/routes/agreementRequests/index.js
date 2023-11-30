// imports
const express = require("express");
const createAgreementRequests = require("../../api/agreementRequests/controllers/createAgreementRequests");
const getAgreementRequests = require("../../api/agreementRequests/controllers/getAgreementRequests");

// create router
const router = express.Router();

// routes
router.get("/agreements", getAgreementRequests);
router.post("/agreements", createAgreementRequests);

module.exports = router;
