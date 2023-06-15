import sequelize from '../models';
import User from '../models/userModel';
import { Request, Response } from 'express';

const postUser = async (req: Request, res: Response) => {
  const {
    id,
    name,
    surname,
    email,
    password,
    image,
    bio,
    catchphrase,
    itineraries,
    categories,
  } = req.body;

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
      categories,
    });
    console.log('user controller try');
    res.status(201).json(user);
  } catch (err) {
    let messageErr;
    if (err instanceof Error) messageErr = err.message;
    else messageErr = String(err);
    res.status(400).json({ message: messageErr });
    console.log(err, 'failed user controller');
  }
};

export default postUser;
