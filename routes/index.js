const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dice Goblin' });
});

// Google OAuth Login Route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth Callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/characters',
    failureRedirect: '/characters'
  }
));

// Google OAuth Logout Route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/characters');
  });
});

module.exports = router;