const mongoose = require("mongoose");
const CONSTATNTS = require("../../../utils/constants");

const fileSchema = new mongoose.Schema({
  guid: { type: String, required: true, unique: true },
  fileName: { type: String, required: true },
  s3FileName: { type: String },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  userId: { type: String, required: true },
  status: {
    type: String,
    enum: [
      CONSTATNTS.STATUS_PROCESSING,
      CONSTATNTS.STATUS_COMPLETED,
      CONSTATNTS.STATUS_ERROR,
    ],
    default: CONSTATNTS.STATUS_PROCESSING,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
