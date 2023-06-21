import { Destination } from '../context';
import { DirectionsWaypoint, LatLng } from '../services/googlePlaceService';
import { tripProps } from '../services/tripService';

export const generateDestinationPoints = (destination: Destination) => {
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

export const generateDestinationEndPoint = (destination: Destination) => {
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
//*
export const generateTripEndPoint = ({ trip }: tripProps): LatLng | string => {
  if (trip.type === 'singleDestination' || !trip.coords) {
    return 'NULL!!!';
  } else if (trip.type === 'oneWay' && trip.coords.end) {
    return new google.maps.LatLng(
      new google.maps.LatLng(trip.coords.end.lat, trip.coords.end.lng)
    );
  } else {
    return new google.maps.LatLng(trip.coords.start.lat, trip.coords.start.lng);
  }
};

export const generateTripWaypoints = ({
  trip,
}: tripProps): DirectionsWaypoint[] | undefined => {
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
