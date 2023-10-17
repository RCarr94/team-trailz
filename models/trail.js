const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trailSchema = new Schema({
    trailName: String,
    location: String,
    latitude: Number,
    longitude: Number,
    difficulty: String,
    length: Number,
    description: String,
    image: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Trail', trailSchema);
