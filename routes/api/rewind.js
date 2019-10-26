const express = require('express');
const router = express.Router();

const rewind = require('../../models/rewind');

// @route   GET api/rewinds
// @desc    Get All rewinds
// @access  Public
router.get('/', (req, res) => {
    rewind.find()
      .sort({ date: -1 })
      .populate("company")
      .populate("product")
      .then(rewinds => res.json(rewinds))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/rewinds
  // @desc    Create An rewind
  // @access  Private
  router.post('/', (req, res) => {
    // console.log( req.body.rewind)
    const newrewind = new rewind(req.body.rewind)
    // console.log( "newrewind things : " + newrewind)
    // const newrewind = new rewind({
    //   serialNumber: req.body.serialNumber,
    //   type: req.body.type,
    //   materialNumber: req.body.materialNumber,
    //   productionDate: req.body.productionDate,
    //   actualWire: req.body.actualWire,
    //   actualVoltage: req.body.actualVoltage,
    //   actualCurrent: req.body.actualCurrent,
    //   actualFrequency: req.body.actualFrequency,
    //   actualWireSection: req.body.actualWireSection,
    //   newVoltage: req.body.newVoltage,
    //   newCurrent: req.body.newCurrent,
    //   newFrequency: req.body.newFrequency,
    //   newNumberOfTurns: req.body.newNumberOfTurns,
    //   newWire: req.body.newWire,
    //   company: req.body.company,
    //   product: req.body.product,
    // });
  
    newrewind.save().then(rewind => res.json(rewind));
  });
  
  // @route   POST api/rewinds
  // @desc    Create An rewind
  // @access  Private
  router.put('/', (req, res) => {
    rewind.findById(req.body.rewind._id)
    .then(rewind => {
      Object.assign(rewind , req.body.rewind)
      // rewind = req.body.rewind
      // console.log(rewind)
      // rewind.name = req.body.name
      // rewind.type = req.body.type
      // rewind.email = req.body.email
      // rewind.fax = req.body.fax
      // rewind.phone = req.body.phone
      // rewind.website = req.body.website
      // rewind.taxAdmin = req.body.taxAdmin
      // rewind.taxNumber = req.body.taxNumber
      // rewind.addresses = req.body.addresses
      rewind.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
      
  });


  // @route   DELETE api/rewinds/:id
  // @desc    Delete A rewind
  // @access  Private
  router.delete('/:id', (req, res) => {
    rewind.findById(req.params.id)
      .then(rewind => rewind.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;