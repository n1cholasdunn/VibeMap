const sequelize = require('../models/models.index');

const Trip = require('../models/tripModel');

exports.postTrip = async (req, res) => {
    const { id, user, type, coords, categories, points, description } = req.body
    try {
        const trip = await Trip.create({
            id,
            user,
            type,
            coords: JSON.stringify(coords),
            categories: JSON.stringify(categories),
            points: JSON.stringify(points),
            description
        })
        trip.coords = JSON.parse(trip.coords)
        trip.categories = JSON.parse(trip.categories)
        trip.points = JSON.parse(trip.points)
        res.status(201).json(trip)
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
}

exports.getTrip = async (req, res) => {
    try {
        const trips = await Trip.findAll({});
        trips.forEach(trip => {
            trip.coords = JSON.parse(trip.coords)
            trip.categories = JSON.parse(trip.categories)
            trip.points = JSON.parse(trip.points)
        })
        res.json(trips);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//delete

//edit