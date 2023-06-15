const sequelize = require('../models/models.index');
import { Request, Response } from "express";
const Trip = require('../models/tripModel');

export const postTrip = async (req: Request, res: Response) => {
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
        let messageErr
        if (err instanceof Error) messageErr = err.message
        else messageErr = String(err)
        res.status(400).json({ message: messageErr })
    }
}

export const getTrip = async (req: Request, res: Response) => {
    try {
        const trips = await Trip.findAll({});
        trips.forEach((trip: { coords: string; categories: string; points: string; }) => {
            trip.coords = JSON.parse(trip.coords)
            trip.categories = JSON.parse(trip.categories)
            trip.points = JSON.parse(trip.points)
        })
        res.json(trips);
    } catch (err) {
        let messageErr
        if (err instanceof Error) messageErr = err.message
        else messageErr = String(err)
        res.status(400).json({ message: messageErr })
    }
};
