const authService = require('./auth.service');
const catchAsync = require('../../utils/catchAsync');
const { sendResponse } = require('../../utils/response');

exports.register = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    await authService.registerUser(email, password);
    sendResponse(res, 201, true, 'User registered. Check console/email for OTP.');
});

exports.login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const data = await authService.loginUser(email, password);
    sendResponse(res, 200, true, 'Login successful', data);
});

exports.verifyOtp = catchAsync(async (req, res) => {
    const { email, otp } = req.body;
    await authService.verifyOtp(email, otp);
    sendResponse(res, 200, true, 'Email verified successfully');
});

exports.setPin = catchAsync(async (req, res) => {
    const { pin } = req.body;
    await authService.setupPin(req.user.id, pin);
    sendResponse(res, 200, true, 'PIN set successfully');
});
