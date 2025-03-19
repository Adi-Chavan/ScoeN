const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchasedUnits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }] // Tracks purchased units
});

module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model('User', userSchema);