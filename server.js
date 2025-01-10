const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/user-auth-api');

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// User Registration
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered');
});

// User Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Forget User Password
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        
        res.send('Password reset link sent to your email');
    } else {
        res.status(404).send('Email not found');
    }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
