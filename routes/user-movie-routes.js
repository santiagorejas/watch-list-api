const express = require("express");

const router = express.Router();

const userMovieControllers = require("../controllers/user-movie-controllers");
const checkAuth = require("../middlewares/check-auth");

router.post(
    "/",
    checkAuth.authenticated,
    userMovieControllers.addUserMovieRelation
);

router.delete(
    "/",
    checkAuth.authenticated,
    userMovieControllers.removeUserMovieRelation
);

router.get(
    "/",
    checkAuth.authenticated,
    userMovieControllers.getUserMovieRelation
);

module.exports = router;
