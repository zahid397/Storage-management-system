const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

// Import Routes
const authRoutes = require('./modules/auth/auth.routes');
const folderRoutes = require('./modules/folder/folder.routes');
const fileRoutes = require('./modules/file/file.routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logger
app.use('/uploads', express.static('uploads')); // Serve static files

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/files', fileRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
