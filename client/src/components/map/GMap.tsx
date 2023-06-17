import {
  GoogleMap,
  Marker,
  useLoadScript,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api';
import { useEffect, useMemo, useState, useContext } from 'react';
import '../../App.css';
import locations from '../../db.json';
import MapInfoWindow from './MapInfoWindow';

import { DestinationContext } from '../../context';
import React from 'react';
import {
  DirectionsWaypoint,
  LatLng,
  LatLngLiteral,
  Place,
} from '../../services/googlePlaceService';

type Route = google.maps.DirectionsResult;

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  categories: [string];
  address: string;
}
//change the naming
interface GMapProps {
  filteredLocationsCallback: (location: Location) => boolean;
}

const GMap: React.FC<GMapProps> = ({ filteredLocationsCallback }) => {
  const { destination } = useContext(DestinationContext);
  const [directions, setDirections] = useState<Route | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
  });

  const center = useMemo(
    () => ({
      lat: destination.coords.start?.lat,
      lng: destination.coords.start?.lng,
    }),
    [destination.coords.start]
  );

  useEffect(() => {
    const generateEndPoint = () => {
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

    const generateWaypoints = () => {
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
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      const start = {
        lat: destination.coords.start?.lat,
        lng: destination.coords.start?.lng,
      };

      directionsService.route(
        {
          ////////////////////////////////////////////////////////////////
          origin: start as string | LatLng | Place | LatLngLiteral, //FIXED THE ERRORS HERE USING "AS" NOT SURE IF THIS IS WRONG
          destination: generateEndPoint() as
            | string
            | LatLng
            | LatLngLiteral
            | Place, //
          waypoints: generateWaypoints() as DirectionsWaypoint[] | undefined, //
          ////////////////////////////////////////////////////////////////
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions ${result}`);
          }
        }
      );
    }
  }, [
    isLoaded,
    destination.coords.start,
    destination.coords.end,
    destination.coords.midpoint,
    destination.type,
  ]);
  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='map-container'
          center={center as LatLng | LatLngLiteral | undefined}
          zoom={20}>
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: 'blue',
                },
              }}
            />
          )}

          <>
            <Marker
              position={
                {
                  lat: destination.coords.start?.lat,
                  lng: destination.coords.start?.lng,
                } as LatLng | LatLngLiteral
              }
              icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
            />

            {destination.coords.midpoint !== null &&
              destination.coords.midpoint !== undefined && (
                <Marker
                  position={
                    {
                      lat: destination.coords.midpoint.lat,
                      lng: destination.coords.midpoint.lng,
                    } as LatLng | LatLngLiteral
                  }
                  icon={
                    'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                  }
                />
              )}
            {destination.coords.end !== null &&
              destination.coords.end !== undefined && (
                <Marker
                  position={
                    {
                      lat: destination.coords.end.lat,
                      lng: destination.coords.end.lng,
                    } as LatLng | LatLngLiteral
                  }
                  icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                />
              )}
          </>
          {/*
                        filter takes a callback */}
          {locations
            .filter(filteredLocationsCallback)
            .map((location: Location) => (
              <Marker
                key={location.id}
                position={{
                  lat: location.lat,
                  lng: location.lng,
                }}
                onClick={() => {
                  setSelectedLocation(location);
                }}
              />
            ))}
          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }}
              onCloseClick={() => {
                setSelectedLocation(null);
              }}>
              <MapInfoWindow
                selectedLocation={selectedLocation}></MapInfoWindow>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default GMap;
