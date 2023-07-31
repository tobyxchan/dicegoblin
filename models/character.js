const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        enum: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
        required: true
    },
    race: {
        type: String,
        enum: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
        required: true
    },
    level: {
        type: Number,
        min: 1,
        max: 20,
        default: 1
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Character', characterSchema);