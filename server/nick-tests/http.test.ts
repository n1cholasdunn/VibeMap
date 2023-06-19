import express from 'express';
import supertest from 'supertest';
import router from '../router';
import mocks from './db.json';
import chai, { expect, should } from 'chai';

const app = express();
app.use(express.json());
app.use(router);

const request = supertest(app);

describe('test server endpoints', () => {
  before('Make sure');
});

describe('GET /trips', () => {
  it('should get all trips from the db', async () => {
    const res = await request.get('/trips');
    res.status.should.equal(200);
    res.body.should.eql(mocks);
    res.body.length.should.equal(150);
  });
});
