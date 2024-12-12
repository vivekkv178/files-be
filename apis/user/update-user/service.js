const createError = require("http-errors");

const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  const { email, firebaseUid } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        firebaseUid,
      });

      await user.save();
      return res
        .status(200)
        .json({ message: "User created successfully", user });
    }
    res.status(200).json({ message: "User already exists", user });
  } catch (error) {
    console.error("Error storing user in MongoDB:", error);
    next(createError(500));
  }
};
