const File = require("../apis/file/models/file.model");

const updateFileStatus = async (fileId, status) => {
  try {
    const result = await File.findOneAndUpdate(
      { _id: fileId },
      { status, updatedAt: new Date() },
      { new: true }
    );
    if (!result) {
      throw new Error("File not found");
    }
    console.log(`File status updated: ${result.status}`);
    return result;
  } catch (error) {
    console.error("Error updating file status:", error);
    throw error;
  }
};

module.exports = updateFileStatus;
