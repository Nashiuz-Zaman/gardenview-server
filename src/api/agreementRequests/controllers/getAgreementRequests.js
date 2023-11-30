// import
const AgreementRequests = require("../../../models/AgreementRequests/AgreementRequests");

const getAgreementRequests = async (req, res) => {
  const result = await AgreementRequests.find();

  return res.send({ success: true, agreements: result });
};

module.exports = getAgreementRequests;
