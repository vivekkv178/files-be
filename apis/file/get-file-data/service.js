const createError = require("http-errors");

const FileData = require("../models/file-data.model");
const File = require("../models/file.model");

module.exports = async (req, res, next) => {
  const fileId = req.params.fileId;
  const { startRow, endRow } = req.query;

  try {
    const file = await File.findOne({ _id: fileId });

    const fileData = await FileData.findOne({ fileId });

    if (!startRow) {
      res.status(200).json({ ...file.toObject(), ...fileData.toObject() });
    } else {
      const totalRecords = fileData.data.length;
      const paginatedData = fileData.data.slice(startRow, endRow);

      res.json({
        data: paginatedData,
        fields: fileData.fields,
        totalRecords,
      });
    }
  } catch (error) {
    console.error("Error fetching file data:", error);
    next(createError(500));
  }
};
