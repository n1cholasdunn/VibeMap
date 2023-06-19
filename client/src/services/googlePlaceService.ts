export const fetchPlaceInfo = async function (
  lat: number,
  lng: number,
  name: string
) {
  const URL = `http://localhost:3333/place/${lat}/${lng}/${name}`;
  const data = await fetch(URL).then((res) => res.json());
  console.log(data, 'HERE IS DATA');

  return data;
};

export type LatLng = google.maps.LatLng;
export type GoogleMap = google.maps.Map;
export type Place = google.maps.Place;
export type LatLngLiteral = google.maps.LatLngLiteral;
export type DirectionsWaypoint = google.maps.DirectionsWaypoint;
export type DirectionsResult = google.maps.DirectionsResult;

// function displayRoute(
//   origin: string,
//   destination: string,
//   service: google.maps.DirectionsService,
//   display: google.maps.DirectionsRenderer
// ) {
//   service
//     .route({
//       origin: origin,
//       destination: destination,
//       waypoints: [
//         { location: 'Adelaide, SA' },
//         { location: 'Broken Hill, NSW' },
//       ],
//       travelMode: google.maps.TravelMode.DRIVING,
//       avoidTolls: true,
//     })
//     .then((result: google.maps.DirectionsResult) => {
//       display.setDirections(result);
//     })
//     .catch((e) => {
//       alert('Could not display directions due to: ' + e);
//     });
// }
