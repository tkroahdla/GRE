const mongoose = require('mongoose');
const { Schema } = mongoose;

const User_info = new Schema({
  name: {
    type: String,
    required: true,
  },
  friendIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
});

module.exports = mongoose.model('user', User_info);
