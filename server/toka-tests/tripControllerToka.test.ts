const express = require('express');
const supertest = require('supertest');
const router = require('../router.ts');
const mockTrips = require('./db.json');

require('chai').should();

const app = express();
app.use(express.json());
app.use(router.default);

const request = supertest(app);

describe('Post /trips', () => {
  const fakeTrip = {
    id: 11,
    name: 'Fake Place',
    lat: 56.4234,
    lng: 115.9231,
    categories: ['Test'],
    address: 'Fake Place, Test District No. 0, ZZ, North Korea',
  };
  it('should post a trip to db'),
    async () => {
      const res = await request.post('/trips').send({ fakeTrip });
      res.status.should.equal(200);
      res.body.action.should.equal('added');
    };

  describe('GET /trips', () => {
    it('should get all trips from db', async () => {
      const res = await request.get('/trips');
      res.status.should.equal(200);
      res.body.length.should.equal(1);
    });
  });
});
