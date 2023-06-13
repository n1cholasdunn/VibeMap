const sequelize = require('../models/models.index');
const User = require('../models/userModel')

exports.postUser = async (req, res) => {
    const {
        id, name, surname, email, password, image, bio, catchphrase, itineraries, categories
    } = req.body

    try {
        const user = await User.create({
            id,
            name,
            surname,
            email,
            password,
            image,
            bio,
            catchphrase,
            itineraries: JSON.stringify(itineraries),
            categories
        })
        console.log('user controller try')
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ message: err.message })
        console.log(err, 'failed user controller')
    }
}

// exports.getTrip = async (req, res) => {
//     try {
//         const trips = await Trip.findAll({});
//         trips.forEach(trip => {
//             trip.coords = JSON.parse(trip.coords)
//             trip.categories = JSON.parse(trip.categories)
//             trip.points = JSON.parse(trip.points)
//         })
//         res.json(trips);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

//delete

//edit