// imports
const express = require("express");
const makeAnnouncement = require("../../api/announcements/controllers/makeAnnouncement");
const getAnnouncements = require("../../api/announcements/controllers/getAnnouncements");

// create router
const router = express.Router();

// routes
router.get("/announcements", getAnnouncements);
router.post("/announcements", makeAnnouncement);

module.exports = router;
