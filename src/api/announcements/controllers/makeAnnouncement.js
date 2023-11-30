// import
const Announcements = require("../../../models/Announcements/Announcements");

const makeAnnouncement = async (req, res) => {
  const announcement = req.body;

  const result = await Announcements.create(announcement);

  // if announcement created successfully generate token
  if (result._id) {
    return res.send({ success: true, announcement: result });
  }
};

module.exports = makeAnnouncement;
