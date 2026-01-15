const User = require('./auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Helper to generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerUser = async (email, password) => {
    // Generate 4 digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const otpExpires = Date.now() + 10 * 60 * 1000; // 10 mins

    const user = await User.create({
        email,
        password,
        otp,
        otpExpires
    });

    // In production, use Nodemailer here. For local dev, we log it.
    console.log(`📨 [MOCK EMAIL] OTP for ${email}: ${otp}`);
    
    return user;
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    return { user, token };
};

exports.verifyOtp = async (email, otp) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    if (user.otp !== otp || user.otpExpires < Date.now()) {
        throw new Error('Invalid or expired OTP');
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();
    return user;
};

exports.setupPin = async (userId, pin) => {
    const user = await User.findById(userId);
    user.pin = await bcrypt.hash(pin, 10); // Hash PIN
    await user.save();
    return true;
};
