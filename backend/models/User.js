const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    authProviders: {
        googleId: { type: String, default: null }, // OAuth integration 
        facebookId: { type: String, default: null }, // OAuth integration 
        passkeyId: { type: String, default: null } // Passkey support 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);