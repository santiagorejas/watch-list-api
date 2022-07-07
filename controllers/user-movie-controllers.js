const UserMovie = require("../models/user-movie");

const addUserMovieRelation = async (req, res, next) => {
    const { movie, relation_type, like } = req.body;

    if (!like) {
        try {
            await UserMovie.deleteOne({
                user: req.auth.sub,
                movie,
                relation_type,
            });
        } catch (err) {
            const error = new Error("Removing relation failed.");
            error.status = 500;
            return next(error);
        }

        return res.json({
            message: "relation deleted successfully!",
        });
    }

    let relation;
    try {
        relation = await UserMovie.find({
            user: req.auth.sub,
            movie,
            relation_type,
        });
    } catch (err) {
        const error = new Error("Fetching relation failed.");
        error.message = 500;
        return next(error);
    }

    if (relation) {
        const error = new Error("Relation already exist.");
        error.status = 409;
        return next(error);
    }

    const userMovieRelation = new UserMovie({
        user: req.auth.sub,
        movie,
        relation_type,
    });

    try {
        await userMovieRelation.save();
    } catch (err) {
        const error = new Error("Saving relation failed.");
        error.status = 500;
        return next(error);
    }

    res.json({
        message: "relation created successfully",
    });
};

exports.addUserMovieRelation = addUserMovieRelation;
