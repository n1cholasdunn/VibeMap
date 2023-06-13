// const sequelize = require('../models/models.index');

// const Trip = sequelize.models.Trip;

// exports.postTrip = async (req, res) => {
//     const { type, start, midpoint, end } = req.body
//     try {
//         const trip = await Trip.create({ type, start: JSON.stringify(start), midpoint: JSON.stringify(midpoint), end: JSON.stringify(end) })
//         res.status(201).json(trip)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// }

// exports.getTrip = async (req, res) => {
//     try {
//         const trips = await Trip.findAll({});
//         trips.forEach(trip => {
//             trip.start = JSON.parse(trip.start)
//             trip.midpoint = JSON.parse(trip.midpoint)
//             trip.end = JSON.parse(trip.end)
//         })
//         res.json(trips);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// //delete

// //edit