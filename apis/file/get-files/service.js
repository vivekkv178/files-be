const createError = require("http-errors");

const File = require("../models/file.model");

module.exports = async (req, res, next) => {
  const userId = req.user.uid;
  try {
    const files = await File.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ files });
  } catch (error) {
    console.error("Error fetching user files:", error);
    next(createError(500));
  }
};
