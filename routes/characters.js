const express = require('express');
const router = express.Router();

const characters = require('../controllers/characters');
const charactersController = require('../controllers/characters');

// GET /characters
router.get('/', charactersController.index);
// GET /charaters/new
router.get('/new', charactersController.new);
// GET /characters/:id
router.get('/:id', charactersController.show);
// POST /characters
router.post('/', charactersController.create);

module.exports = router;
