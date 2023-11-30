// imports
const express = require("express");
const getFlats = require("../../api/flats/controllers/getFlats");
const updateFlat = require("../../api/flats/controllers/updateFlat");

// create router
const router = express.Router();

router.get("/flats", getFlats);
router.patch("/flats/:id", updateFlat);

module.exports = router;
