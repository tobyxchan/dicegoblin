const User = require('../model/user');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

module.exports = {
    index,
    show,
    create
};

function index(req, res, next) {
    const users = User.find({});
    res.render('users/index', users);
};

async function show(req, res, next) {
    const user = await User.findById(req.params.id);
    res.render('users/show', {user});
};

async function create(req, res, next) {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader(req.file.path);
        // Create a new user
        let user = new User({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id
        })
        // Save user
        await user.save();
        // res.json(user);
        res.redirect(`/users/${user.id}`);
    } catch (err) {
        console.log(err);
    }
};