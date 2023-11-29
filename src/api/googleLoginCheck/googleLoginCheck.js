// imports
const User = require("../../models/User/User");
const generateToken = require("../../utils/generateToken");

const googleLoginCheck = async (req, res) => {
  const googleUser = req.body;

  // check if google user exists
  const user = await User.findOne({ email: googleUser.email });
  const token = generateToken({ email: googleUser.email });

  // if user already exists, don't save in database, just take role and create token and send them
  if (user) {
    return res.send({ success: true, role: user.role, token });
  } else {
    // if no user create the new user object in mongodb as user
    const newGoogleUser = {
      name: googleUser.name,
      email: googleUser.email,
      role: "user",
      agreementDate: "none",
      rentedApt: {
        floor: "none",
        block: "none",
        aptNo: "none",
      },
    };

    const result = await User.create(newGoogleUser);
    if (result._id) {
      return res.send({ success: true, role: "user", token: token });
    }
  }
};

module.exports = googleLoginCheck;
