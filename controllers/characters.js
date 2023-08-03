const Character = require('../models/character');
// const classDetails = {dropDown, myWrappers, selectionDetails };

module.exports = {
    index,
    show,
    new: newCharacter,
    create,
    delete: deleteCharacter,
    edit,
    update
};

async function update(req, res) {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body);
    console.log(character);
    res.redirect(`/characters/${character._id}`);
};

async function edit(req, res) {
    const character = await Character.findById(req.params.id);
    res.render('characters/edit', {
        title: 'Edit Character',
        character
    });
};

async function deleteCharacter(req, res) {
    const character = await Character.findById(req.params.id);
    character.deleteOne();
    res.redirect('/characters');
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

function newCharacter (req, res) {
    res.render('characters/new', { title: 'Create Character', errorMsg: '' });
};

async function show(req, res) {
    const character = await Character.findById(req.params.id);
    res.render('characters/show', { title: 'Character Sheet', character });
};

async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', { title: 'Character List', characters });
};