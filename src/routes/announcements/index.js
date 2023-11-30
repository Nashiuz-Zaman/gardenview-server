// imports
const express = require("express");
const makeAnnouncement = require("../../api/makeAnnouncement/controllers/makeAnnouncement");

// create router
const router = express.Router();

// routes
router.post("/announcements", makeAnnouncement);

module.exports = router;
