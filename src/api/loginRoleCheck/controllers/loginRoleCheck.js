// import
const User = require("../../../models/User/User");
const generateToken = require("../../../utils/generateToken");

const loginRoleCheck = async (req, res) => {
  // take email
  const { email } = req.body;

  // find user
  const user = await User.findOne({ email: email });

  // find user's role
  const role = user.role;

  // generate jwt
  const token = generateToken({ email });

  // send to client
  return res.send({ role, token });
};

module.exports = loginRoleCheck;
