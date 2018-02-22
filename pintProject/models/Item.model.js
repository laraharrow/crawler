const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: Date.now,
  },
});

module.exports = mongoose.model('Item', ItemSchema);