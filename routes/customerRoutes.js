const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// all customers

router.get('/', async (req,res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});

// add customers

router.post('/add', async (req,res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone

    });
    try{
        const newCustomer = await customer.save();
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});



module.exports = router;//