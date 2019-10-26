const express = require('express');
const router = express.Router();

const nameplate = require('../../models/nameplate');

// @route   GET api/nameplates
// @desc    Get All nameplates
// @access  Public
router.get('/', (req, res) => {
    nameplate.find()
      .sort({ date: -1 })
      .then(nameplates => res.json(nameplates))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/nameplates
  // @desc    Create An nameplate
  // @access  Private
  router.post('/', (req, res) => {
    const newnameplate = new nameplate(req.body.nameplate)
    newnameplate.save().then(nameplate => res.json(nameplate));
  });
  
  // @route   POST api/nameplates
  // @desc    Create An nameplate
  // @access  Private
  router.put('/', (req, res) => {
    nameplate.findById(req.body.nameplate._id)
    .then(nameplate => {
      Object.assign(nameplate , req.body.nameplate)
      nameplate.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
      
  });


  // @route   DELETE api/nameplates/:id
  // @desc    Delete A nameplate
  // @access  Private
  router.delete('/:id', (req, res) => {
    nameplate.findById(req.params.id)
      .then(nameplate => nameplate.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;