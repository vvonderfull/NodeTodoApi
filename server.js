const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require('cors');
const todoApiRoutes = require("./routes/api-todo-routes");
const categoryApiRoutes = require("./routes/api-category-routes");
require("dotenv").config();

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").whiteBright;

const app = express();
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log(successMsg("Connect DB!"));
    })
    .catch((err) => {
        console.log(errorMsg(err));
    });

app.listen(process.env.PORT || 3000, (error) => {
    error
        ? console.log(errorMsg(error))
        : console.log(successMsg("listen " + process.env.PORT));
});

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
);

// app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use(methodOverride("_method"));

app.get('/', (request, res) => {
        res.send('Conneccteedd!!')
    }
)
app.use(todoApiRoutes);
app.use(categoryApiRoutes);

app.use((req, res) => {
    res.status(404)
});
