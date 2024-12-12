const ENV_CONFIG = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  MONGO_URL: process.env.MONGO_URL,
};

Object.freeze(ENV_CONFIG);

module.exports = ENV_CONFIG;
