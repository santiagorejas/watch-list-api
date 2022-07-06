const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMovieSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    movie: {
        type: String,
        required: true,
    },
    relation_type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("UserMovie", userMovieSchema);
