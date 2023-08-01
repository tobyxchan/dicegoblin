const Character = require('../models/character');
// const classDetails = {dropDown, myWrappers, selectionDetails };

module.exports = {
    index,
    show,
    new: newCharacter,
    create
};

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', { title: 'Character List', characters });
};

async function show(req, res) {
    const character = await Character.findById(req.params.id);
    res.render('characters/show', { title: 'Character Sheet', character });
};

function newCharacter (req, res) {
    res.render('characters/new', { title: 'Create Character', errorMsg: '' });
};

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } try {
        const character = await Character.create(req.body);
        res.redirect(`/characters/${character._id}`);
    } catch (err) {
        console.log(err);
        res.render('/character/new', {errorMsg: err.message});
    }
};