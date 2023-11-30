const mongoose = require("mongoose");

const agreementRequests = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
  status: {
    type: String,
    required: true,
  },
  agreementReqDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AgreementRequests", agreementRequests);
