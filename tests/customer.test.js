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
        name: 'test',
        email: 'test@example.com',
        phoneNumber: '1234567890',
        simCard: {
          plan: 'Go Unlimited',
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

    it('should fetch all customers', async () => {
      // Create a customer before fetching
      await Customer.create({
        name: 'Jane Doe',
        email: 'jane@example.com',
        phoneNumber: '0987654321',
        simCard: {
          plan: 'Premium',
          phoneNumber: '0987654321',
        },
      });
  
      const res = await request(app)
        .get('/customers')
        .expect(200);
  
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0); // Now it should pass
    });

    it('should delete a customer', async () => {
      const customer = await Customer.create({
        name: 'Test2',
        email: 'test2@example.com',
        phoneNumber: '5566778899',
        simCard: {
          plan: 'Unlimited Plus',
          phoneNumber: '5566778899',
        },
      });
  
      const res = await request(app)
        .delete(`/customers/${customer._id}`)
        .expect(200);
  
      expect(res.body.message).toBe('Customer deleted successfully');
    });









});