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

afterAll(async () => {
    await mongoose.connection.dropDatabase();  // Clean up the database after tests
    await mongoose.connection.close();  // Close the connection
  });
  
  describe('Customer API', () => {
  
    // Test for creating a new customer
    it('should create a new customer', async () => {
      const newCustomer = {
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '1234567890',
        simCard: {
          plan: 'Basic',
          phoneNumber: '1234567890',
        },
      };
  
      const res = await request(app)
        .post('/customers')
        .send(newCustomer)
        .expect(201); // Expecting HTTP 201 Created
  
      expect(res.body).toHaveProperty('_id');
      expect(res.body.name).toBe(newCustomer.name);
      expect(res.body.email).toBe(newCustomer.email);
    });