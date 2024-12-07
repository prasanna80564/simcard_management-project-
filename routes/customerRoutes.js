const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');


router.get('/', async (req,res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  }
  catch (err) {
    res.status(500).json({ message: err.message});
  }


});

router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }

});

router.post('/add', async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  }
  catch (err) {
    res.status(400).json({ message: err.message});
  }
});