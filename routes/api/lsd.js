const express = require('express');
const router = express.Router();

const lsd = require('../../models/lsd');

// @route   GET api/lsds
// @desc    Get All lsds
// @access  Public
router.get('/', (req, res) => {
    lsd.find()
      .sort({ updatedAt: -1 })
      .populate('company')
      .then(lsds => res.json(lsds))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/lsds
  // @desc    Create An lsd
  // @access  Private
  router.post('/', (req, res) => {
    const newlsd = new lsd(req.body.lsd)
    newlsd.save().then(lsd => res.json(lsd));
  });
  
  
  // @route   POST api/lsds
  // @desc    Update An lsd
  // @access  Private
  router.put('/', (req, res) => {
    lsd.findById(req.body.lsd._id)
    .then(lsd => {
      Object.assign(lsd , req.body.lsd)
      lsd.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
  });

  // @route   DELETE api/lsds/:id
  // @desc    Delete A lsd
  // @access  Private
  router.delete('/:id', (req, res) => {
    lsd.findById(req.params.id)
      .then(lsd => lsd.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;