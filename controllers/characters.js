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

// var dropDown = document.getElementById("dropDown");
//     var myWrappers = [
//         document.getElementById("wrapperOne"),
//         document.getElementById("wrapperTwo"),
//         document.getElementById("wrapperThree"),
//         document.getElementById("wrapperFour"),
//         document.getElementById("wrapperFive"),
//         document.getElementById("wrapperSix"),
//         document.getElementById("wrapperSeven"),
//         document.getElementById("wrapperEight"),
//         document.getElementById("wrapperNine"),
//         document.getElementById("wrapperTen"),
//         document.getElementById("wrapperEleven"),
//         document.getElementById("wrapperTwelve")
//     ];
// function selectionDetails() {
//     for (i = 0; i < myWrappers.length; i++){
//         if (dropDown.value === "Default"){
//             myWrappers[i].style.display = "none";
//         } else if (dropDown.value === "Barbarian"){
//             myWrappers[i].style.display = "none";
//             myWrappers[0].style.display = "block";
//         } else if (dropDown.value === "Bard"){
//             myWrappers[i].style.display = "none";
//             myWrappers[1].style.display = "block";
//         } else if (dropDown.value === "Cleric"){
//             myWrappers[i].style.display = "none";
//         myWrappers[2].style.display = "block";
//         } else if (dropDown.value === "Druid"){
//             myWrappers[i].style.display = "none";
//             myWrappers[3].style.display = "block";
//         } else if (dropDown.value === "Fighter"){
//             myWrappers[i].style.display = "none";
//             myWrappers[4].style.display = "block";
//         } else if (dropDown.value === "Monk"){
//             myWrappers[i].style.display = "none";
//             myWrappers[5].style.display = "block";
//         } else if (dropDown.value === "Paladin"){
//             myWrappers[i].style.display = "none";
//             myWrappers[6].style.display = "block";
//         } else if (dropDown.value === "Ranger"){
//             myWrappers[i].style.display = "none";
//             myWrappers[7].style.display = "block";
//         } else if (dropDown.value === "Rogue"){
//             myWrappers[i].style.display = "none";
//             myWrappers[8].style.display = "block";
//         } else if (dropDown.value === "Sorcerer"){
//             myWrappers[i].style.display = "none";
//             myWrappers[9].style.display = "block";
//         } else if (dropDown.value === "Warlock"){
//             myWrappers[i].style.display = "none";
//             myWrappers[10].style.display = "block";
//         } else if (dropDown.value === "Wizard"){
//             myWrappers[i].style.display = "none";
//             myWrappers[11].style.display = "block";
//         }
//     };
// }