import '../../App.css';
import { useState, useEffect, useMemo } from 'react';
import { Link, redirect } from 'react-router-dom';
import React from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api';
import type { tripProps } from '../../services/tripService';
import { apiKey } from '../../helpers/apiKey';
import {
  generateTripEndPoint,
  generateTripWaypoints,
} from '../../helpers/pointGeneration';

const ItineraryItem = ({ trip }: tripProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.onload = () => {
      setGoogleLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [directions, setDirections] = useState<google.maps.DirectionsResult>();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const center = useMemo(
    () => ({ lat: trip.coords.start.lat, lng: trip.coords.start.lng }),
    [trip.coords.start]
  );

  const mapZoom = () => {
    if (trip.type === 'singleDestination') {
      return 12;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    generateTripEndPoint({ trip });
    generateTripWaypoints({ trip });

    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      const start = {
        lat: trip.coords.start.lat,
        lng: trip.coords.start.lng,
      };

      directionsService
        .route({
          origin: start,
          destination: generateTripEndPoint({ trip }),
          waypoints: generateTripWaypoints({ trip }),
          optimizeWaypoints: true,
          travelMode: window.google.maps.TravelMode.DRIVING,
        })
        .then((result: google.maps.DirectionsResult) => {
          setDirections(result);
        })
        .catch((e) => {
          alert('Could not display directions due to: ' + e);
        });
    }
  }, [isLoaded, trip]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  const handleViewMap = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    return redirect('/mapview');
    // ** not sure why ^^ has trip as a second argument and navigate isn't reccomened so using redirect now
  };

  return (
    <div className='max-w-sm  h-[200px] bg-white border border-gray-200 rounded-lg shadow-md m-3'>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className='rounded-t-lg'>
          <GoogleMap
            mapContainerClassName='map-container'
            center={center}
            zoom={mapZoom()}>
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
                position={{
                  lat: trip.coords.start.lat,
                  lng: trip.coords.start.lng,
                }}
                icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
              />

              {trip.coords.midpoint !== null &&
                trip.coords.midpoint !== undefined && (
                  <Marker
                    position={{
                      lat: trip.coords.midpoint.lat,
                      lng: trip.coords.midpoint.lng,
                    }}
                    icon={
                      'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                    }
                  />
                )}
              {trip.coords.end !== null && trip.coords.end !== undefined && (
                <Marker
                  position={{
                    lat: trip.coords.end.lat,
                    lng: trip.coords.end.lng,
                  }}
                  icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                />
              )}
            </>

            {trip.points.map((location) => (
              <Marker
                key={location.name}
                position={{
                  lat: location.lat,
                  lng: location.lng,
                }}
              />
            ))}
          </GoogleMap>
        </div>
      )}
      <div className='pt-5'>
        <Link to={'/profile'}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
            {trip.description}
          </h5>
        </Link>
        <Link
          to={'/profile'}
          onClick={handleViewMap}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
          text-md border p-2 rounded-lg'>
          View Map
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryItem;
