const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// for all customers

router.get('/', async (req,res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
});
module.exports = Customer;

// for customer id

router.get('/:id',async(req,res) => {
    try{const customer = await Customer.findById(req.params.id);
        res.json(customer);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

// add new customer 

router.post('/add',async (req,res)=> {
    const customer = new Customer({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    try{
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);

    }

    catch(err) {
        res.status(400).json({message: err.message});


    }

});

//update a customer 

router.put('/:id',async (req,res)=> {
    try {
        const updatedCustomer = awaitCustomer.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedCustomer);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//delete a customer 

router.delete('/:id', async (req,res) => {
    try{
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: 'customer deleted'});
    }

    catch (err) {
        res.status(500).json({ message: err.message});

    }
});



module.exports = router;
