const request = require('supertest');
const app = require('../server');
const Customer = require('../models/customer');

describe('Cusomer API', () => {
    beforeALL(async () => {
        await Customer.deleteMany({});
    });
});

