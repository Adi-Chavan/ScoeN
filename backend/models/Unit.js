const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    price: { type: Number, required: true },
    content: { type: String } // Notes URL or text
});

module.exports = mongoose.model('Unit', UnitSchema);
