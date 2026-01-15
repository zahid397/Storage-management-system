const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['image', 'pdf', 'note'], required: true },
    url: { type: String }, // Path for uploads
    content: { type: String }, // Content for notes
    size: { type: Number, default: 0 },
    isFavorite: { type: Boolean, default: false },
    folder: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shareToken: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
