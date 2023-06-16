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
export async function postUserTrip(newUserTrip: tripProps) {
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
    id?: null | Number;
    user?: null | String; //not sure on this type
    category?: null | {
      categoryName: String;
    };
    coords: {
      end?: null | {
        lat: Number;
        lng: Number;
      };
      midpoint?: null | {
        lat: Number;
        lng: Number;
      };
      start: null | {
        lat: Number;
        lng: Number;
      };
    };
    description: String | null;
    points: [
      {
        id: null | Number;
        name: String;
        lat: Number;
        lng: Number;
        address: String;
        categories: String[];
      }
    ];
    updatedAt?: String;
    type: String;
  };
};
