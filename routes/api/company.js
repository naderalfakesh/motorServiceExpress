const express = require('express');
const router = express.Router();

const company = require('../../models/company');

// @route   GET api/companys
// @desc    Get All companys
// @access  Public
router.get('/', (req, res) => {
    company.find()
      .sort({ date: -1 })
      .then(companys => res.json(companys))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/companys
  // @desc    Create An company
  // @access  Private
  router.post('/', (req, res) => {
    const newcompany = new company({
      name: req.body.name,
      type: req.body.type,
      email: req.body.email,
      fax: req.body.fax,
      phone: req.body.phone,
      website: req.body.website,
      taxAdmin: req.body.taxAdmin,
      taxNumber: req.body.taxNumber,
      addresses: req.body.addresses
    });
  
    newcompany.save().then(company => res.json(company));
  });
  
  // @route   POST api/companys
  // @desc    Create An company
  // @access  Private
  router.put('/', (req, res) => {
    company.findById(req.body.id)
    .then(company => {
      company.name = req.body.name
      company.type = req.body.type
      company.email = req.body.email
      company.fax = req.body.fax
      company.phone = req.body.phone
      company.website = req.body.website
      company.taxAdmin = req.body.taxAdmin
      company.taxNumber = req.body.taxNumber
      company.addresses = req.body.addresses
      company.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
      
  });


  // @route   DELETE api/companys/:id
  // @desc    Delete A company
  // @access  Private
  router.delete('/:id', (req, res) => {
    company.findById(req.params.id)
      .then(company => company.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;