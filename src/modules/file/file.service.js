const File = require('./file.model');
const { v4: uuidv4 } = require('uuid');

exports.uploadFile = async (user, fileData, folderId) => {
    return await File.create({
        name: fileData.originalname,
        type: fileData.mimetype.includes('pdf') ? 'pdf' : 'image',
        url: fileData.path,
        size: fileData.size,
        user: user.id,
        folder: folderId || null
    });
};

exports.createNote = async (user, { name, content, folderId }) => {
    return await File.create({
        name,
        type: 'note',
        content,
        user: user.id,
        folder: folderId || null
    });
};

exports.getFilesByDate = async (userId, date) => {
    // Parse Date: YYYY-MM-DD
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await File.find({
        user: userId,
        createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
};

exports.generateLink = async (fileId, userId) => {
    const file = await File.findOne({ _id: fileId, user: userId });
    if (!file) throw new Error('File not found');
    
    const token = uuidv4();
    file.shareToken = token;
    await file.save();
    return `http://localhost:5000/api/files/shared/${token}`;
};
