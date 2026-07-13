const errorHandler = (err, req, res, next)=>{
    console.log(err.stack);

    res.status(err.statusCode || 500).json({
        status: "fail",
        err: err.message || "internal error"
    })
}

module.exports = errorHandler;