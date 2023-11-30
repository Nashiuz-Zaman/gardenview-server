// import
const Flats = require("../../../models/Flats/Flats");

const getFlats = async (req, res) => {
  const { booked, limit, skip } = req.query;

  // if no booked query then send all
  if (!booked) {
    const query = Flats.find().skip(parseInt(skip)).limit(parseInt(limit));
    const queryCount = Flats.countDocuments();

    const [flats, count] = await Promise.all([query.exec(), queryCount.exec()]);

    return res.send({ success: true, flats: flats, count: count });
  }

  // convert true/false string to boolean true/false
  const boolean = booked === "true";
  const query = Flats.find({ booked: boolean })
    .skip(parseInt(skip))
    .limit(parseInt(limit));
  const queryCount = Flats.countDocuments({ booked: boolean });

  const [flats, count] = await Promise.all([query.exec(), queryCount.exec()]);

  res.send({ success: true, flats: flats, count: count });
};

module.exports = getFlats;
