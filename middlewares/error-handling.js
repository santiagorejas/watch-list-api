const errorHandling = (err, req, res, next) => {
    const { message, status } = err;

    res.json({
        message: message || "An error has occurred",
        status: status || 500,
    });
};

module.exports = errorHandling;
