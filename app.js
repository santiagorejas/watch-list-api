require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.json({ message: "Hello, world!" });
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch((err) => console.log(err));
