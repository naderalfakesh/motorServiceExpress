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
  actualWire:[
    {
      quantity: Number,
      guage: Number,
      section: Number
    },
    {
      quantity: Number,
      guage: Number,
      section: Number
    }
  ],
  actualVoltage: {
    type: String,
  },
  actualCurrent: {
    type: String,
  },
  actualFrequency: {
    type: String,
  },
  actualNumberOfTurns: {
    type: String,
  },
  actualWireSection: {
    type: String,
  },
  newVoltage: {
    type: String,
  },
  newCurrent: {
    type: String,
  },
  newFrequency: {
    type: String,
  },
  newNumberOfTurns: {
    type: String,
  },
  newWire: [
    {
      quantity: Number,
      guage: Number,
      section: Number
    },
    {
      quantity: Number,
      guage: Number,
      section: Number
    }
  ],
  company: {type: Schema.Types.ObjectId ,  ref: 'company' },
  product: {type: Schema.Types.ObjectId ,  ref: 'product' },
});

module.exports = rewind = mongoose.model('rewind', schema);