import sequelize from '../models/index';
import { Request, Response } from 'express';
const LocationPoint = sequelize.models.LocationPoint;
//updated

interface Trip {
    start: string;
    midpoint: string;
    end: string;
}

export const postLocationPoint = async (req: Request, res: Response) => {
    const { type, start, midpoint, end } = req.body;
    try {
        const trip = await LocationPoint.create({
            type,
            start: JSON.stringify(start),
            midpoint: JSON.stringify(midpoint),
            end: JSON.stringify(end),
        });
        res.status(201).json(trip);
    } catch (err) {
        let messageErr;
        if (err instanceof Error) messageErr = err.message;
        else messageErr = String(err);
        res.status(400).json({ message: messageErr });
    }
};
interface tripTypes {
  type: string;
  start: string;
  midpoint: string;
  end: string;
}

export const getLocationPoint = async (req: Request, res: Response) => {
    try {
        const trips = await LocationPoint.findAll({});
        trips.forEach((trip) => {
            // trips.forEach((trip: { start: string; midpoint: string; end: string }) => {
            (trip.start) = JSON.parse(trip.start);
            trip.midpoint = JSON.parse(trip.midpoint);
            trip.end = JSON.parse(trip.end);
        });
        res.json(trips);
    } catch (err) {
        let messageErr;
        if (err instanceof Error) messageErr = err.message;
        else messageErr = String(err);
        res.status(400).json({ message: messageErr });
    }
};

