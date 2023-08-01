const express = require('express');
const router = express.Router();
const descriptionsController = require('../controllers/descriptions');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const descriptions = require('../controllers/descriptions');

// POST /characters/:id/descriptions
router.post('/characters/:id/descriptions', ensureLoggedIn, descriptionsController.create);
// DELETE /descriptions/:id
router.delete('/reviews/:id', ensureLoggedIn, descriptionsController.delete);

module.exports = router;