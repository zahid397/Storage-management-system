const express = require('express');
const router = express.Router();
const folderController = require('./folder.controller');
const { protect } = require('../../middlewares/auth.middleware');

router.use(protect); // Protect all routes

router.post('/', folderController.createFolder);
router.get('/', folderController.getFolders);
router.delete('/:id', folderController.deleteFolder);

module.exports = router;
