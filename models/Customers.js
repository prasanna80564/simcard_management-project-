const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email: {type:String,required: true},
    phone: {type:string , required:true}


});

const Customer = mongoose.model('customer',customerSchema);

module.exports = Customer;
