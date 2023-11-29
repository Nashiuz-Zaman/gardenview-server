// imports
const express = require("express");
const getFlats = require("../../api/getFlats/controllers/getFlats");

// create router
const router = express.Router();

router.get("/flats", getFlats);

module.exports = router;
