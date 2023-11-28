// import
const checkEmailExists = require("../../../utils/checkEmailExists");

const User = require("../../../models/User/User");

const checkUserExists = async (req, res) => {
  const { email } = req.body;
  // check if user exists first
  const emailExists = await checkEmailExists(email);

  if (emailExists) {
    // if email exists then send respond accordingly
    return res.send({ userExists: true });
  } else {
    // if email doesn't exist send this response
    return res.send({ userExists: false });
  }
};

module.exports = checkUserExists;