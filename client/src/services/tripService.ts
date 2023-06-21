import { Destination } from '../context';
const url = 'http://localhost:3333';

export async function getUserTrips() {
  try {
    const res = await fetch(url + '/trips');
    const json = await res.json();
    console.log('GET REQUEST SUCCESSFUL');
    return json;
  } catch (error) {
    console.log(error, 'GET REQUEST NOT SUCCESSFUL');
    return error;
  }
}
export async function postUserTrip(newUserTrip: Destination) {
  try {
    const response = await fetch(url + '/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserTrip),
    });
    const res = await response.json();
    console.log(res, 'THIS IS THE NEWUSERTRIP');
    return res;
  } catch (error) {
    console.log(error, 'NOT POSTED');
    return error;
  }
}

export async function editUserTrip() {}

export type tripProps = {
  trip: {
    id?: null | number;
    user?: null | string;
    category?: null | {
      categoryName: string;
    };
    coords: {
      end: {
        lat: number;
        lng: number;
      };
      midpoint?: {
        lat: number;
        lng: number;
      };
      start: {
        lat: number;
        lng: number;
      };
    };
    description: number | null;
    points: [
      {
        id: null | number;
        name: string;
        lat: number;
        lng: number;
        address: string;
        categories: string[];
      }
    ];
    updatedAt?: string;
    type: string;
  };
};
