const express = require("express");

const router = express.Router();

const userMovieControllers = require("../controllers/user-movie-controllers");

router.post("/", userMovieControllers.addUserMovieRelation);

module.exports = router;
