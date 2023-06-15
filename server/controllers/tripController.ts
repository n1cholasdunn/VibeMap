const { Trip } = require('../models/index');
import { Request, Response } from 'express';
import { TripAttributes } from '../models/tripModel';

export const postTrip = async (req: Request, res: Response) => {
  const { coords, categories, points } = req.body;
  try {
    const trip = await Trip.create({
      coords,
      categories,
      points,
    });
    res.status(201).json(trip);
  } catch (err) {
    let messageErr;
    if (err instanceof Error) messageErr = err.message;
    else messageErr = String(err);
    res.status(400).json({ message: messageErr });
  }
};

export const getTrip = async (req: Request, res: Response) => {
  try {
    const trips = await Trip.findAll({});
    trips.forEach((trip: TripAttributes) => {
      trip.coords = JSON.parse(trip.coords);
      //null checks
      if (trip.categories) {
        trip.categories = JSON.parse(trip.categories);
      }
      if (trip.points) {
        trip.points = JSON.parse(trip.points);
      }
    });
    res.json(trips);
  } catch (err) {
    let messageErr;
    if (err instanceof Error) messageErr = err.message;
    else messageErr = String(err);
    res.status(400).json({ message: messageErr });
  }
};

// import sequelize from '../models/index';
// import { Model } from 'sequelize';
// import { Request, Response } from 'express';
// import { TripAttributes } from '../models/tripModel'; // Assuming you have a TripAttributes interface

// const Trip = sequelize.models.Trip as typeof Model & {
//   new (): TripAttributes;
// };

// export const postTrip = async (req: Request, res: Response) => {
//   const { coords, categories, points } = req.body;
//   try {
//     const trip = await Trip.create({
//       coords,
//       categories,
//       points,
//     });
//     res.status(201).json(trip);
//   } catch (err) {
//     let messageErr;
//     if (err instanceof Error) messageErr = err.message;
//     else messageErr = String(err);
//     res.status(400).json({ message: messageErr });
//   }
// };

// export const getTrip = async (req: Request, res: Response) => {
//   try {
//     const trips = await Trip.findAll({});
//     trips.forEach((trip: TripAttributes) => {
//       // Perform any necessary operations
//     });
//     res.json(trips);
//   } catch (err) {
//     let messageErr;
//     if (err instanceof Error) messageErr = err.message;
//     else messageErr = String(err);
//     res.status(400).json({ message: messageErr });
//   }
// };

// import sequelize from '../models/index';
// import { Request, Response } from 'express';
// import Trip from '../models/tripModel';

// export const postTrip = async (req: Request, res: Response) => {
//   const { id, user, type, coords, categories, points, description } = req.body;
//   try {
//     const trip = await Trip.create({
//       id,
//       user,
//       type,
//       coords: JSON.stringify(coords),
//       categories: JSON.stringify(categories),
//       points: JSON.stringify(points),
//       description,
//     });
//     trip.coords = JSON.parse(trip.coords);
//     trip.categories = JSON.parse(trip.categories);
//     trip.points = JSON.parse(trip.points);
//     res.status(201).json(trip);
//   } catch (err) {
//     let messageErr;
//     if (err instanceof Error) messageErr = err.message;
//     else messageErr = String(err);
//     res.status(400).json({ message: messageErr });
//   }
// };

// export const getTrip = async (req: Request, res: Response) => {
//   try {
//     const trips = await Trip.findAll({});
//     trips.forEach(
//       (trip: { coords: string; categories: string; points: string }) => {
//         trip.coords = JSON.parse(trip.coords);
//         trip.categories = JSON.parse(trip.categories);
//         trip.points = JSON.parse(trip.points);
//       }
//     );
//     res.json(trips);
//   } catch (err) {
//     let messageErr;
//     if (err instanceof Error) messageErr = err.message;
//     else messageErr = String(err);
//     res.status(400).json({ message: messageErr });
//   }
// };

// export default { postTrip, getTrip };
