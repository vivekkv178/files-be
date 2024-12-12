const AWS = require("aws-sdk");
const ENV_CONFIG = require("./env-config");

AWS.config.update({
  accessKeyId: ENV_CONFIG.AWS_KEY_ID,
  secretAccessKey: ENV_CONFIG.AWS_SECRET_KEY,
  region: ENV_CONFIG.AWS_REGION,
});

const s3 = new AWS.S3();
module.exports = { s3 };
