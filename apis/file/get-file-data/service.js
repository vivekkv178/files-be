const createError = require("http-errors");

const FileData = require("../models/file-data.model");
const File = require("../models/file.model");

module.exports = async (req, res, next) => {
  const fileId = req.params.fileId;
  try {
    const file = await File.findOne({ _id: fileId });

    const fileData = await FileData.findOne({ fileId });

    res.status(200).json({ ...file.toObject(), ...fileData.toObject() });
  } catch (error) {
    console.error("Error fetching file data:", error);
    next(createError(500));
  }
};
