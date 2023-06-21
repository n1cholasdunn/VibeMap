import Trip from '../models/tripModel';
import { Request, Response } from 'express';
import { TripAttributes } from '../models/tripModel';

interface TripRequest extends Request {
  body: {
    id: string;
    user: string;
    type: string;
    coords: string;
    categories: string;
    points: string;
    description: string;
  };
}

export const postTrip = async (req: TripRequest, res: Response) => {
  const { id, user, type, coords, categories, points, description } = req.body;
  try {
    const trip = await Trip.create({
      // id,
      user,
      type,
      coords: JSON.stringify(coords),
      categories: JSON.stringify(categories),
      points: JSON.stringify(points),
      description,
    });
    trip.coords = JSON.parse(trip.coords);
    if (trip.categories) {
      trip.categories = JSON.parse(trip.categories);
    }
    if (trip.points) {
      trip.points = JSON.parse(trip.points);
    }
    // trip.categories = JSON.parse(trip.categories);
    // trip.points = JSON.parse(trip.points);
    res.status(201).json(trip);
  } catch (err) {
    let messageErr;
    if (err instanceof Error) messageErr = err.message;
    else messageErr = String(err);
    res.status(400).json({ message: messageErr });
  }
};
// export const postTrip = async (req: Request, res: Response) => {
//   const { coords, categories, points } = req.body;
//   console.log(coords);
//   try {
//     const trip = await Trip.create({
//       coords,
//       categories,
//       points,
//     });
//     res.status(201).json(trip);
//   } catch (err) {
//     console.log(err);
//     let messageErr;
//     if (err instanceof Error) messageErr = err.message;
//     else messageErr = String(err);
//     res.status(400).json({ message: messageErr });
//   }
// };

export const getTrip = async (req: Request, res: Response) => {
  try {
    const trips = await Trip.findAll({});
    console.log(trips);
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
