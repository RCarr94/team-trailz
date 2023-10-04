const Schema = require('mongoose').Schema;

const trailSchema = new Schema({
    name: String,
    location: String,
    difficulty: String,
    length: Number,
    description: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = trailSchema;
