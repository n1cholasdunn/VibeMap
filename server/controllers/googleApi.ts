import axios from 'axios';
import { Request, Response } from 'express';

export default async function fetchGoogleData(req: Request, res: Response) {
  const { lat, lng, name } = req.params;

  console.log('API KEY ==> ', process.env.API_KEY);

  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5&formatted_address=${name}key=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await axios(URL);
    console.log('Response:', response.data);
    return res.status(200).send(response.data);
  } catch (error) {
    console.error('Error:', error);
    return;
  }
}
