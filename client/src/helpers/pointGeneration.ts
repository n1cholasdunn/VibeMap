import { Destination } from '../context';
// import { DirectionsWaypoint } from '../services/googlePlaceService';

// export const generateWaypoints = (): DirectionsWaypoint[] | undefined => {
//   if (
//     trip.type === 'singleDestination' ||
//     trip.type === 'oneWay' ||
//     !trip.coords
//   ) {
//     return undefined;
//   } else if (trip.coords.midpoint && trip.coords.end) {
//     return [
//       {
//         location: `${trip.coords.midpoint.lat},${trip.coords.midpoint.lng}`,
//       },
//       { location: `${trip.coords.end.lat},${trip.coords.end.lng}` },
//     ];
//   }
// };

//! from GMap.tsx
// const { destination } = useContext(DestinationContext);
export const generateWaypoints = (destination: Destination) => {
  if (
    destination.type === 'singleDestination' ||
    destination.type === 'oneWay'
  ) {
    return null;
  } else {
    return [
      {
        location: `${destination.coords.midpoint?.lat},${destination.coords.midpoint?.lng}`,
      },
      {
        location: `${destination.coords.end?.lat},${destination.coords.end?.lng}`,
      },
    ];
  }
};
export const generateEndPoint = (destination: Destination) => {
  if (destination.type === 'singleDestination') {
    return null;
  } else if (destination.type === 'oneWay') {
    return {
      lat: destination.coords.end?.lat,
      lng: destination.coords.end?.lng,
    };
  } else if (destination.type === 'loopTrip') {
    return {
      lat: destination.coords.start?.lat,
      lng: destination.coords.start?.lng,
    };
  }
};
