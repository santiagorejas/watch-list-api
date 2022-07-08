require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userMovieRoutes = require("./routes/user-movie-routes");
const checkAuth = require("./middlewares/check-auth");
const errorHandling = require("./middlewares/error-handling");
const cors = require("./middlewares/cors");

app.use(bodyParser.json());
app.use(cors);
app.use(checkAuth.authenticated);

app.use("/api/user-movie", userMovieRoutes);

app.get("/", (req, res, next) => {
    res.json({ message: "Hello, world!" });
});

app.use(errorHandling);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch((err) => console.log(err));
