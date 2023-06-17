import { DirectionsWaypoint } from '../services/googlePlaceService';

export const generateWaypoints = (): DirectionsWaypoint[] | undefined => {
  if (
    trip.type === 'singleDestination' ||
    trip.type === 'oneWay' ||
    !trip.coords
  ) {
    return undefined;
  } else if (trip.coords.midpoint && trip.coords.end) {
    return [
      {
        location: `${trip.coords.midpoint.lat},${trip.coords.midpoint.lng}`,
      },
      { location: `${trip.coords.end.lat},${trip.coords.end.lng}` },
    ];
  }
};
