const mongoose = require("mongoose");

const fileDataSchema = new mongoose.Schema({
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
    required: true,
    unique: true,
  },
  fields: { type: [String], default: [] },
  data: { type: Object, required: true },
});

const FileData = mongoose.model("FileData", fileDataSchema);
module.exports = FileData;
