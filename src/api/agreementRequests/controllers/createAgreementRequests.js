// import
const AgreementRequests = require("../../../models/AgreementRequests/AgreementRequests");

const createAgreementRequests = async (req, res) => {
  const agreementRequest = req.body;

  const result = await AgreementRequests.create(agreementRequest);

  if (result._id) {
    return res.send({ success: true });
  }
};

module.exports = createAgreementRequests;
