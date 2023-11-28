// import
const User = require("./../../../models/User/User");

const createUser = async (req, res) => {
  const user = req.body;
  const result = await User.create(user);
  res.send(result);
};

module.exports = createUser;
