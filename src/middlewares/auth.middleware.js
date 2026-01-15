const jwt = require('jsonwebtoken');
const { sendResponse } = require('../utils/response');
const User = require('../modules/auth/auth.model');

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) return sendResponse(res, 401, false, 'Not authorized');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return sendResponse(res, 401, false, 'Token invalid');
    }
};
