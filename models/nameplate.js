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
  model: {
    type: String,
  },
  productionDate: {
    type: String,
  },
  serialNumber: {
    type: String,
  },
  materialNumber: {
    type: String,
  },
  frame: {
    type: String,
  },
  pole: {
    type: String,
  },
  protectionClass: {
    type: String,
  },
  insulationClass: {
    type: String,
  },
  deltaT: {
    type: String,
  },
  duty: {
    type: String,
  },
  serviceFactor: {
    type: String,
  },
  smokeClass: {
    type: String,
  },
  voltage: [{
    type: String,
  }],
  frequency: [{
    type: String,
  }],
  power: [{
    type: String,
  }],
  speed: [{
    type: String,
  }],
  current: [{
    type: String,
  }],
  powerFactor: [{
    type: String,
  }],
  IECode: {
    type: String,
  },
  eff100: [{
    type: String,
  }],
  eff75: [{
    type: String,
  }],
  eff50: [{
    type: String,
  }],
  deBearing: {
    type: String,
  },
  ndeBearing: {
    type: String,
  },
  deGreaseQTY: {
    type: String,
  },
  ndeGreaseQTY: {
    type: String,
  },
  grease: {
    type: String,
  },
  greasePeriod: {
    type: String,
  },
  nema1: {
    type: String,
  },
  nema2: {
    type: String,
  },
  altitude: {
    type: String,
  },
  weight: {
    type: String,
  },
  teao1: {
    type: String,
  },
  teao2: {
    type: String,
  }
});

module.exports = nameplate = mongoose.model('nameplate', schema);