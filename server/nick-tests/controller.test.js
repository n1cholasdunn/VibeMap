// import express from 'express';
// import supertest from 'supertest';
// import router from '../router';
// import mocks from './db.json';
// import chai, { expect, should } from 'chai';

// const app = express();
// app.use(express.json());
// app.use(router);

// const request = supertest(app);

// describe('test server endpoints', () => {
//   before('Make sure');
// });

// describe('GET /trips', () => {
//   it('should get all trips from the db', async () => {
//     const res = await request.get('/trips');
//     // res.status.should.equal(200);
//     res.body.should.eql(mocks);
//     res.body.length.should.equal(150);
//   });
// });
// describe('POST /trips', () => {
//   it('should create a new trip in the db', async () => {
//     const newTrip = {
//       id: '123',
//       user: 'John',
//       type: 'Single Destination',
//       coords: [40.7128, -74.006],
//       categories: ['nature', 'adventure'],
//       points: [],
//       description: 'A trip to Yosemite',
//     };

//     const res = await request.post('/trips').send(newTrip);
//     // res.status.should.equal(201);
//     res.body.should.have.property('id');
//     res.body.user.should.equal(newTrip.user);
//     res.body.type.should.equal(newTrip.type);
//     res.body.coords.should.eql(newTrip.coords);
//     res.body.categories.should.eql(newTrip.categories);
//     res.body.points.should.eql(newTrip.points);
//     res.body.description.should.equal(newTrip.description);
//   });

//   it('should return an error if required fields are missing', async () => {
//     const incompleteTrip = {
//       user: 'John',
//       type: 'Single Destination',
//       categories: ['nature', 'adventure'],
//       points: [],
//       description: 'A trip to Yosemite',
//     };

//     const res = await request.post('/trips').send(incompleteTrip);
//     // res.status.should.equal(400);
//     res.body.should.have.property('message');
//   });
// });
