// import

const generateToken = require("../../../utils/generateToken");
const User = require("./../../../models/User/User");

const createUser = async (req, res) => {
  const user = req.body;
  // create user
  const result = await User.create(user);

  // if user created successfully generate token
  if (result._id) {
    const token = generateToken({ email: user.email });
    return res.send({ success: true, token, user: result });
  }
};

module.exports = createUser;
