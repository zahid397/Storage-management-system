const { sendResponse } = require('../utils/response');

exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    // Mongoose duplicate key error
    if (err.code === 11000) {
        return sendResponse(res, 400, false, 'Duplicate field value entered');
    }

    return sendResponse(res, err.statusCode || 500, false, err.message || 'Server Error');
};
