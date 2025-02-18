const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
