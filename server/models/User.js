const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);