const Character = require('../models/character');

module.exports = {
    create,
    delete: deleteDescription
};

async function create(req, res) {
    const character = await Character.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    if (character.descriptions.length < 1) {
        character.descriptions.push(req.body)
            try {
                await character.save()
            } catch (err) {
                console.log(err)
            }
        res.redirect(`/characters/${character._id}`)
    } else {
        character.descriptions.shift();
        character.descriptions.push(req.body)
            try {
                await character.save()
            } catch (err) {
                console.log(err)
            }
        res.redirect(`/characters/${character._id}`)
    }
};

async function deleteDescription(req, res) {
    const character = await Character.findOne({ 'descriptions._id': req.params.id, 'descriptions.user': req.user._id });
    if (!character) return res.redirect(`/characters/${character._id}`);
    character.descriptions.remove(req.params.id);
    await character.save();
    res.redirect(`/characters/${character._id}`);
};