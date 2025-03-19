const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Sign-up route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Sign-in route
router.post('/signin', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Logged in successfully', user: req.user });
});

// Get current user route
router.get('/me', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: 'User is not authenticated' });
    }
});

// Logout route
router.post("/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error during logout", error: err });
      }
      req.session.destroy(); 
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out successfully" });
    });
  });

  // Redirect to Google for authentication
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// // Google callback after authentication
// router.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/signin' }),
//   (req, res) => {
//     // Successful authentication, redirect to the desired page
//     res.redirect('/');
//   }
// );

module.exports = router;