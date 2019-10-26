const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: {type: Schema.Types.ObjectId ,  ref: 'company' }
});

module.exports = contact = mongoose.model('contact', schema);