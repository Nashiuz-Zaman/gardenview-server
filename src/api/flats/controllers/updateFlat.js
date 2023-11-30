// import
const Flats = require("../../../models/Flats/Flats");

const updateFlat = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const filter = { _id: id };

  const flat = await Flats.findOneAndUpdate(filter, update, { new: true });

  if (flat.booked) {
    return res.send({ success: true });
  }
};

module.exports = updateFlat;
