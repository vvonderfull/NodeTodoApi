const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postApiRoutes = require("./routes/api-post-routes");
require("dotenv").config();

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").whiteBright;

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(successMsg("Connect DB!"));
  })
  .catch((err) => {
    console.log(errorMsg(err));
  });

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorMsg(error))
    : console.log(successMsg("listen " + process.env.PORT));
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(postApiRoutes);

app.use((req, res) => {
  res.status(404)
});
