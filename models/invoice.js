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
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  referance: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
  },
  deliveryAddress: {
    type: String,
  },
  items: [
    {
      materialNumber: String,
      description: String,
      delivery: String,
      unitPrice: Number,
      qty: Number
    }
  ],
  company: {type: Schema.Types.ObjectId ,  ref: 'company' },
  product: {type: Schema.Types.ObjectId ,  ref: 'product' },
  contact: {type: Schema.Types.ObjectId ,  ref: 'contact' },


});

module.exports = invoice = mongoose.model('invoice', schema);