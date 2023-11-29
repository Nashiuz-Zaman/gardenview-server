// import
const mongoose = require("mongoose");

const flatsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  floorNo: {
    type: String,
    required: true,
  },
  blockName: {
    type: String,
    required: true,
  },
  apartmentNo: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  booked: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("flats", flatsSchema);
