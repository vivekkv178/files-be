const createError = require("http-errors");

const CONSTATNTS = require("../../../utils/constants");
const processCsvFromS3 = require("../../../utils/process-file");

const { AWS_S3_FILE_UPLOAD_BUCKET } = require("../../../config/common-config");

const File = require("../models/file.model");

module.exports = async (req, res, next) => {
  const { guid, fileName, s3FileName, size, type } = req.body;

  try {
    const newFile = new File({
      guid,
      fileName,
      s3FileName,
      size,
      type,
      status: CONSTATNTS.STATUS_PROCESSING,
      userId: req.user.uid,
    });
    await newFile.save();
    res.json(newFile);
    processCsvFromS3(
      AWS_S3_FILE_UPLOAD_BUCKET,
      newFile.s3FileName,
      newFile._id
    );
  } catch (error) {
    console.error("Error saving file details:", error);
    next(createError(500));
  }
};
