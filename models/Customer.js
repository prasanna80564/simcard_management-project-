//schema for customers


const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  simcard: {
    phoneNumber: { type: String, required: true},
    plan: {type: String, enum: ['Basic','Gold','Platinum'], required: true},
    isActive: {type: Boolean, default: false}

  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

