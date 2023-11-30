// import
const AgreementRequests = require("../../../models/AgreementRequests/AgreementRequests");

const updateAgreementRequest = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const filter = { _id: id };

  const agreementRequest = await AgreementRequests.findOneAndUpdate(
    filter,
    update,
    {
      new: true,
    }
  );

  if (agreementRequest) {
    return res.send({ success: true });
  }
};

module.exports = updateAgreementRequest;
