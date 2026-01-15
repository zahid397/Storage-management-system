const fileService = require('./file.service');
const File = require('./file.model');
const catchAsync = require('../../utils/catchAsync');
const { sendResponse } = require('../../utils/response');

// 1. Upload
exports.uploadFile = catchAsync(async (req, res) => {
    if (!req.file) throw new Error('No file uploaded');
    const file = await fileService.uploadFile(req.user, req.file, req.body.folderId);
    sendResponse(res, 201, true, 'File uploaded', file);
});

// 2. Create Note
exports.createNote = catchAsync(async (req, res) => {
    const note = await fileService.createNote(req.user, req.body);
    sendResponse(res, 201, true, 'Note created', note);
});

// 3. Calendar View (Get by Date)
exports.getFiles = catchAsync(async (req, res) => {
    if (req.query.date) {
        const files = await fileService.getFilesByDate(req.user.id, req.query.date);
        return sendResponse(res, 200, true, 'Files for date fetched', files);
    }
    // Default fetch all
    const files = await File.find({ user: req.user.id });
    sendResponse(res, 200, true, 'All files fetched', files);
});

// 4. Toggle Favorite
exports.toggleFavorite = catchAsync(async (req, res) => {
    const file = await File.findOne({ _id: req.params.id, user: req.user.id });
    if (!file) throw new Error('File not found');
    
    file.isFavorite = !file.isFavorite;
    await file.save();
    sendResponse(res, 200, true, 'Favorite status updated', file);
});

// 5. Duplicate File
exports.duplicateFile = catchAsync(async (req, res) => {
    const original = await File.findOne({ _id: req.params.id, user: req.user.id });
    if (!original) throw new Error('File not found');

    const copyData = original.toObject();
    delete copyData._id;
    copyData.name = `Copy of ${original.name}`;
    copyData.createdAt = Date.now();
    
    const copy = await File.create(copyData);
    sendResponse(res, 201, true, 'File duplicated', copy);
});

// 6. Share Link
exports.generateShareLink = catchAsync(async (req, res) => {
    const link = await fileService.generateLink(req.params.id, req.user.id);
    sendResponse(res, 200, true, 'Link generated', { link });
});

// 7. Delete
exports.deleteFile = catchAsync(async (req, res) => {
    await File.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    // Note: In production, assume you also use fs.unlink to delete physical file
    sendResponse(res, 200, true, 'File deleted');
});
