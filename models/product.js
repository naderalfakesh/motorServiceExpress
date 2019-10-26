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
  materialNumber: {
    type: String,
  },
  serialNumber: {
    type: String,
  },
  motor: {
    brand: "", 
    series: "", 
    type: "", 
    power: "",
    speed: "",
    voltage: "",
    frequency: "",
    effeciency: "",
    frame: "",
    pole:   "",
  },
  vfd: {
    brand: "",
    series: "",
    type: "",
    power: "",
    current: "",
    voltage: "",
    frame: "",
},
lsd: {
    brand: "",
    series: "",
    productionDate: "", 
    motorpower: "",
    rotorcurrent: "",
    rotorvoltage: ""
}

},{toObject:{virtuals:true},toJSON:{virtuals:true}});

schema.virtual('summary').get(function() {
  if(this.type == 'motor'){
    return this.motor.power+"kW "+this.motor.frame+"-"+this.motor.pole+" "+this.serialNumber
  }
  else if(this.type == 'vfd'){
    return this.vfd.series+" " + this.vfd.current+"A "
  }  
  else if(this.type == 'lsd'){
    return this.lsd.series+" "+this.serialNumber
  }  
  else {
    return "ürün tipi seçilmemiştir"
  }  
  
});

module.exports = product = mongoose.model('product', schema);