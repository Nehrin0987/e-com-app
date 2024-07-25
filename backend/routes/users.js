const router = require('express').Router();
let User = require('../models/user.model');

// Registration route
router.route('/register').post(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json('Please enter all fields');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json('User already exists');
  }

  const newUser = new User({
    name,
    email,
    password, 
  });

  try {
    await newUser.save();
    res.status(201).json('User registered successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Login route
router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Please enter all fields');
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json('Invalid credentials');
  }

  
  if (password !== user.password) {
    return res.status(400).json('Invalid credentials');
  }


  res.json({
    
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

module.exports = router;
