const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;