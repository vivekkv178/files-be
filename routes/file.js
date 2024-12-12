const preSignedUrl = require("../apis/file/pre-signed-url/controller");
const addFile = require("../apis/file/add-file/controller");
const getFiles = require("../apis/file/get-files/controller");
const getFileData = require("../apis/file/get-file-data/controller");

module.exports = [preSignedUrl, addFile, getFiles, getFileData];
