const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    challengeLvl: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const trailSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Trail', trailSchema);
