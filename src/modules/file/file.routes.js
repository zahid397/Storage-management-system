const express = require('express');
const router = express.Router();
const fileController = require('./file.controller');
const { protect } = require('../../middlewares/auth.middleware');
const { upload } = require('../../middlewares/upload.middleware');

router.use(protect);

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.post('/note', fileController.createNote);
router.get('/', fileController.getFiles); // Handles ?date=YYYY-MM-DD
router.patch('/:id/favorite', fileController.toggleFavorite);
router.post('/:id/duplicate', fileController.duplicateFile);
router.get('/:id/share', fileController.generateShareLink);
router.delete('/:id', fileController.deleteFile);

module.exports = router;
