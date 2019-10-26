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
  type: {
    type: String,
  },
  email: {
    type: String,
  },
  fax: {
    type: String,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  taxAdmin: {
    type: String,
  },
  taxNumber: {
    type: String,
  },
  addresses: [{main: Boolean ,  address: String }]
});

module.exports = company = mongoose.model('company', schema);