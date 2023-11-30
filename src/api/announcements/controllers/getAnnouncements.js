// import
const Announcements = require("../../../models/Announcements/Announcements");

const getAnnouncements = async (req, res) => {
  const result = await Announcements.find();

  return res.send({ success: true, announcements: result });
};

module.exports = getAnnouncements;
