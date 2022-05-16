const mongoose = require( 'mongoose' );

const commentsSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: Date.now
    }
}, { _id: false });

module.exports = commentsSchema;

