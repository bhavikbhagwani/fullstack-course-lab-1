// error handling middleware to handle 404 errors and send appropriate error response

export const notFoundErrorHandler = (req, res, next) => {

    const err = new Error('Not Found')
    err.status = 404
    next(err)

}

export const globalErrorHandler = (err, req, res, next) => {


    const status = err.status || 500
    console.error(err)
    res.status(status).json({
        status: status,
        message: err.message
    })

}