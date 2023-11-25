const generateToken = require("./../../../utils/generateToken");

const createCookieToken = async (req, res) => {
  // const user = req.body;
  const token = generateToken({ email: "abcd" });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
    })
    .send({ success: true });
};

module.exports = createCookieToken;
