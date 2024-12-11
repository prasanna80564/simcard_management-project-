const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');  
const Customer = require('../models/Customer');

beforeAll(async () => {
    if (mongoose.connection.readyState === 0) { // 0 = disconnected
      const mongoURI = 'mongodb://localhost:27017/telecom_test';  // Use a test database
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    }
  });

