const express = require('express');
const router = express.Router();

const product = require('../../models/product');

// @route   GET api/product
// @desc    Get All products
// @access  Public
router.get('/', (req, res) => {
    product.find()
      .sort({ date: -1 })
      .then(products => res.json(products))
      .catch(err => console.log('Caught:', err.message));
  });

// @route   GET api/product/motors
// @desc    Get All products
// @access  Public
router.get('/motors', (req, res) => {
    product.find({type : "motor"})
      .sort({ date: -1 })
      .then(products => res.json(products))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/products
  // @desc    Create An product
  // @access  Private
  router.post('/', (req, res) => {
    const newproduct = new product({
      type: req.body.type,
      materialNumber: req.body.materialNumber,
      serialNumber: req.body.serialNumber,
      motor: req.body.motor,
      vfd: req.body.vfd,
      lsd: req.body.lsd
    });
  
    newproduct.save().then(product => res.json(product));
  });
  
  
  // @route   POST api/products
  // @desc    Update An product
  // @access  Private
  router.put('/', (req, res) => {
    product.findById(req.body.id)
    .then(product => {
      product.type = req.body.type
      product.materialNumber = req.body.materialNumber
      product.serialNumber = req.body.serialNumber
      product.motor = req.body.motor
      product.vfd = req.body.vfd
      product.lsd = req.body.lsd

      product.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
  });

  // @route   DELETE api/products/:id
  // @desc    Delete A product
  // @access  Private
  router.delete('/:id', (req, res) => {
    product.findById(req.params.id)
      .then(product => product.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;