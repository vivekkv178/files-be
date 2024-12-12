const mongoose = require("mongoose");
const ENV_CONFIG = require("./env-config");

const connectDB = async () => {
  try {
    await mongoose.connect(ENV_CONFIG.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
