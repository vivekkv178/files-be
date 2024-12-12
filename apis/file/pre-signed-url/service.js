const createError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const { s3 } = require("../../../config/aws");
const COMMON_CONFIG = require("../../../config/common-config");

const generatePresignedUrl = async (fileName, fileType) => {
  const guid = uuidv4();
  const s3FileName = `${guid}-${fileName}`;

  const params = {
    Bucket: COMMON_CONFIG.AWS_S3_FILE_UPLOAD_BUCKET,
    Key: s3FileName,
    Expires: 60,
    ContentType: fileType,
    Metadata: {
      guid,
    },
  };

  const presignedUrl = await s3.getSignedUrlPromise("putObject", params);

  return { presignedUrl, guid, s3FileName, fileName };
};

module.exports = async (req, res, next) => {
  const { body } = req;

  try {
    const data = await generatePresignedUrl(req?.params?.fileName, "text/csv");
    res.json({ ...data });
  } catch (error) {
    console.log("Error While generating the presigned url", error);
    next(createError(500));
  }
};
