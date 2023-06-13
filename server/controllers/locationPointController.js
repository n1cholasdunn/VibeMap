const sequelize = require('../models/models.index');

const LocationPoint = sequelize.models.LocationPoint;

exports.postLocationPoint = async (req, res) => {
    const { type, start, midpoint, end } = req.body
    try {
        const trip = await LocationPoint.create({ type, start: JSON.stringify(start), midpoint: JSON.stringify(midpoint), end: JSON.stringify(end) })
        res.status(201).json(trip)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.getLocationPoint = async (req, res) => {
    try {
        const trips = await LocationPoint.findAll({});
        trips.forEach(trip => {
            trip.start = JSON.parse(trip.start)
            trip.midpoint = JSON.parse(trip.midpoint)
            trip.end = JSON.parse(trip.end)
        })
        res.json(trips);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//delete

//edit