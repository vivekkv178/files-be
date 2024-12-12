const fileRoutes = require("./file");
const userRoutes = require("./user");

module.exports = [...userRoutes, ...fileRoutes];
