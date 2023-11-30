// imports
const express = require("express");
const createAgreementRequests = require("../../api/agreementRequests/controllers/createAgreementRequests");
const getAgreementRequests = require("../../api/agreementRequests/controllers/getAgreementRequests");
const updateAgreementRequest = require("../../api/agreementRequests/controllers/updateAgreementRequest");

// create router
const router = express.Router();

// routes
router.get("/agreements", getAgreementRequests);
router.post("/agreements", createAgreementRequests);
router.patch("/agreements/:id", updateAgreementRequest);

module.exports = router;
