var express = require('express');
var router = express.Router();
const upload = require('../utils/multer');
const userController = require('../controllers/users');

// Index
router.get('/', userController.index);
// Create
router.post('/', upload.single('image'), userController.create);
// Show
router.get('/:id', userController.show);

module.exports = router;
