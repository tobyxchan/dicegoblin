const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
    backstory: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 1
    },
    alignment: {
        type: String,
        enum: ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
});

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    class: {
        type: String,
        enum: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
    },
    race: {
        type: String,
        enum: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
    },
    level: {
        type: Number,
        min: 1,
        max: 20,
        default: 1
    },
    stats: {
        strength: {
            type: Number,
            min: 3,
            max: 20
        },
        dexterity: {
            type: Number,
            min: 3,
            max: 20
        },
        constitution: {
            type: Number,
            min: 3,
            max: 20
        },
        intelligence: {
            type: Number,
            min: 3,
            max: 20
        },
        wisdom: {
            type: Number,
            min: 3,
            max: 20
        },
        charisma: {
            type: Number,
            min: 3,
            max: 20
        }
    },
    descriptions: [descriptionSchema]
});

module.exports = mongoose.model('Character', characterSchema);