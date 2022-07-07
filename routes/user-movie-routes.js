const express = require("express");

const router = express.Router();

const userMovieControllers = require("../controllers/user-movie-controllers");

router.post("/", userMovieControllers.addUserMovieRelation);

router.delete("/", userMovieControllers.removeUserMovieRelation);

module.exports = router;
