const express = require('express');
const supertest = require('supertest');
const router = require('../router.ts');
const mockTrips = require('./db.json');
require('chai').should();

const app = express();
app.use(express.json());

const request = supertest(app);
app.use('/', router.default);
const mockUser = require('./userDb.json');

describe('GET /user', () => {
  it('should get all trips from db', async () => {
    const res = await request.get('/user');
    res.status.should.equal(200);
    res.body.should.eql(mockUser);
    res.body.length.should.equal(1);
  });
});
