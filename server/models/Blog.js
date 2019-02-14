const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  author: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BlogPost', BlogPost);