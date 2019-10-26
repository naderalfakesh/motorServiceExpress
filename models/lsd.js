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
  orderDate: {
    type: Date,
    default: Date.now
  },
  salesPrice: {
    type: String,
  },
  commercialConditions: {
    type: String,
  },
  wantedDeliveryDate: {
    type: Date,
    default: Date.now
  },
  model: {
    type: String,
  },
  deliveryDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
  },
  motorInfo: {
    brand: String,
    power: String,
    poles:  String,
    statorVoltage: String,
    statorCurrent: String,
    rotorVoltage: String,
    rotorCurrent: String,
    burshLifitng: Boolean
  },
  lsdInfo: {
    motor: String,
    vfd:    String,
    gearbox: String,
    contactor: String,
    serialNumber: String,
    productionDate: String
  },
  testInfo:{
      tester: String,
      testDate: String,
      testResult: String
  },
  commissioningInfo: {
      commissioner: String,
      enduser: String,
      address: String,
      commissionDate: String,
      conductivity: String,
      notes: String
  },
  company: {type: Schema.Types.ObjectId ,  ref: 'company' }
});

module.exports = lsd = mongoose.model('lsd', schema);