const Folder = require('./folder.model');
const catchAsync = require('../../utils/catchAsync');
const { sendResponse } = require('../../utils/response');

exports.createFolder = catchAsync(async (req, res) => {
    const folder = await Folder.create({ name: req.body.name, user: req.user.id });
    sendResponse(res, 201, true, 'Folder created', folder);
});

exports.getFolders = catchAsync(async (req, res) => {
    const folders = await Folder.find({ user: req.user.id }).sort('-createdAt');
    sendResponse(res, 200, true, 'Folders fetched', folders);
});

exports.deleteFolder = catchAsync(async (req, res) => {
    // Ideally, also delete files inside folder (Cascading delete)
    await Folder.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    sendResponse(res, 200, true, 'Folder deleted');
});
