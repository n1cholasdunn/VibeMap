import express from 'express';
import { postTrip, getTrip } from './controllers/tripController';
import postUser from './controllers/userController';
import fetchGoogleData from './controllers/googleApi';

const router = express.Router();

router.get('/trips', getTrip);
router.post('/trips', postTrip);

router.post('/user', postUser);

router.get('/place/:lat/:lng/:name', fetchGoogleData);

export default router;
