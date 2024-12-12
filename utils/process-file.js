const { s3 } = require("../config/aws");
const csvParser = require("csv-parser");
const FileData = require("../apis/file/models/file-data.model");
const CONSTATNTS = require("./constants");
const updateFileStatus = require("./update-file-status");

const processCsvFromS3 = async (bucketName, key, fileId) => {
  try {
    const s3Stream = s3
      .getObject({ Bucket: bucketName, Key: key })
      .createReadStream();

    const fileData = {
      fileId,
      fields: [],
      data: [],
    };

    s3Stream
      .pipe(csvParser())
      .on("headers", (headers) => {
        console.log("Headers detected:", key, headers);
        fileData.fields = headers;
      })
      .on("data", (row) => {
        fileData.data.push(row);
      })
      .on("end", async () => {
        const fileRecord = new FileData(fileData);
        await fileRecord.save();
        await updateFileStatus(fileId, CONSTATNTS.STATUS_COMPLETED);
      })
      .on("error", async (err) => {
        console.error("Error processing CSV:", key, err);
        await updateFileStatus(fileId, CONSTATNTS.STATUS_ERROR);
      });
  } catch (error) {
    console.error("Error in processCsvFromS3:", key, error);
    await updateFileStatus(fileId, CONSTATNTS.STATUS_ERROR);
  }
};

module.exports = processCsvFromS3;
