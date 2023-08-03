const express = require('express');
const router = express.Router();

const characters = require('../controllers/characters');
const charactersController = require('../controllers/characters');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /characters
router.get('/', charactersController.index);
// Use ensureLoggedIn middleware to protect routes
router.get('/new', ensureLoggedIn, charactersController.new);
// GET /charaters/new
router.get('/new', charactersController.new);
// GET /characters/:id
router.get('/:id', charactersController.show);
// User ensureLoggedIn middleware to protect route
router.get('/:id/edit', ensureLoggedIn, charactersController.edit);
// GET /characters/:id
router.get('/:id/edit', charactersController.edit);
// POST /characters
router.post('/', charactersController.create);
// Use ensureLoggedIn middleware to protect route
router.delete('/:id', ensureLoggedIn, charactersController.delete)
// DELETE /characters
router.delete('/:id', charactersController.delete);
// Use ensureLoggedIn middleware to protect route
router.put('/:id', charactersController.update);

module.exports = router;
