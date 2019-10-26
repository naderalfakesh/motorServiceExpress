const express = require('express');
const router = express.Router();

const invoice = require('../../models/invoice');

// @route   GET api/invoices
// @desc    Get All invoices
// @access  Public
router.get('/', (req, res) => {
    invoice.find({type:"invoice"})
      .populate('company')
      .populate('contact')
      .populate('product')
      .sort({ date: -1 })
      .then(invoices => res.json(invoices))
      .catch(err => console.log('Caught:', err.message));
  });
  
// @route   GET api/invoice/offer
// @desc    Get All offers
// @access  Public
router.get('/offer', (req, res) => {
    invoice.find({type:"offer"})
      .populate('company')
      .populate('contact')
      .populate('product')
      .sort({ date: -1 })
      .then(invoices => res.json(invoices))
      .catch(err => console.log('Caught:', err.message));
  });
// @route   GET api/invoice/purchase
// @desc    Get All purchases
// @access  Public
router.get('/purchase', (req, res) => {
    invoice.find({type:"purchase"})
      .populate('company')
      .populate('contact')
      .populate('product')
      .sort({ date: -1 })
      .then(invoices => res.json(invoices))
      .catch(err => console.log('Caught:', err.message));
  });
  

  // @route   POST api/invoices
  // @desc    Create An invoice
  // @access  Private
  router.post('/', (req, res) => {
    const newinvoice = new invoice({
      type: req.body.type,
      date: req.body.date,
      referance: req.body.referance,
      note: req.body.note,
      status: req.body.status,
      items: req.body.items,
      deliveryAddress: req.body.deliveryAddress,
      company: req.body.company,
      product: req.body.product,
      contact: req.body.contact,
    });
  
    newinvoice.save().then(invoice => res.json(invoice));
  });
  
  
  // @route   POST api/invoices
  // @desc    Update An invoice
  // @access  Private
  router.put('/', (req, res) => {
    invoice.findById(req.body.id)
    .then(invoice => {
      invoice.type = req.body.type
      invoice.date = req.body.date
      invoice.referance = req.body.referance
      invoice.note = req.body.note
      invoice.status = req.body.status
      invoice.items = req.body.items
      invoice.deliveryAddress= req.body.deliveryAddress
      invoice.company = req.body.company
      invoice.product = req.body.product
      invoice.contact = req.body.contact

      invoice.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
  });

  // @route   DELETE api/invoices/:id
  // @desc    Delete A invoice
  // @access  Private
  router.delete('/:id', (req, res) => {
    invoice.findById(req.params.id)
      .then(invoice => invoice.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;