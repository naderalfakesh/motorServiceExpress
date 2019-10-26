const express = require('express');
const router = express.Router();

const contact = require('../../models/contact');

// @route   GET api/contacts
// @desc    Get All contacts
// @access  Public
router.get('/', (req, res) => {
    contact.find()
      .sort({ date: -1 })
      .populate('company')
      .then(contacts => res.json(contacts))
      .catch(err => console.log('Caught:', err.message));
  });
  
  // @route   POST api/contacts
  // @desc    Create An contact
  // @access  Private
  router.post('/', (req, res) => {
    const newcontact = new contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company
    });
  
    newcontact.save().then(contact => res.json(contact));
  });
  
  
  // @route   POST api/contacts
  // @desc    Update An contact
  // @access  Private
  router.put('/', (req, res) => {
    contact.findById(req.body.id)
    .then(contact => {
      contact.name = req.body.name
      contact.email = req.body.email
      contact.phone = req.body.phone
      contact.company = req.body.company

      contact.save().then(() => res.json({ success: true }) ).catch(err => console.log(err))
      } )
      .catch(err => res.status(404).json({ success: false }));
  });

  // @route   DELETE api/contacts/:id
  // @desc    Delete A contact
  // @access  Private
  router.delete('/:id', (req, res) => {
    contact.findById(req.params.id)
      .then(contact => contact.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;