const User = require("../../../models/User/User");

const roleCheck = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email }, "role");
  return res.send({ user: user });
};

module.exports = roleCheck;
