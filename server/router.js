const router = require("express").Router();
const tripController = require('./controllers/tripController');
const userController = require('./controllers/userController');
const googleApiController = require('./controllers/googleApi')

router.get("/trips", tripController.getTrip);
router.post("/trips", tripController.postTrip);

router.post('/user', userController.postUser)

router.get('/place/:lat/:lng/:name', googleApiController)

module.exports = router