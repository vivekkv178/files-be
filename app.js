var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");

var routes = require("./routes");
const COMMON_CONFIG = require("./config/common-config");
var cors = require("cors");
const decodeJWT = require("./utils/auth-middleware");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(decodeJWT);

app.use(COMMON_CONFIG.BASE_ROUTE, routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
