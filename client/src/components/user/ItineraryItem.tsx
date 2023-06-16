import '../../App.css';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api';
import type { tripProps } from '../../services/tripService';

// const ItineraryItem = ({ trip }) => {
const ItineraryItem = ({ trip }: tripProps) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const [googleLoaded, setGoogleLoaded] = useState(false);

  const navigate = useNavigate();

  //   const autocompleteRef = useRef(null);

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
  }, [apiKey]);

  const [directions, setDirections] = useState<google.maps.DirectionsResult>();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const generateEndPoint = () => {
    if (trip.type === 'singleDestination' || !trip.coords) {
      return null;
    } else if (trip.type === 'oneWay' && trip.coords.end) {
      return { lat: trip.coords.end.lat, lng: trip.coords.end.lng };
    } else if (trip.type === 'loopTrip' && trip.coords.start) {
      return { lat: trip.coords.start.lat, lng: trip.coords.start.lng };
    }
  };

  const generateWaypoints = () => {
    if (
      trip.type === 'singleDestination' ||
      trip.type === 'oneWay' ||
      !trip.coords
    ) {
      return null;
    } else if (trip.coords.midpoint && trip.coords.end) {
      return [
        { location: `${trip.coords.midpoint.lat},${trip.coords.midpoint.lng}` },
        { location: `${trip.coords.end.lat},${trip.coords.end.lng}` },
      ];
    }
  };

  const center = useMemo(
    () => ({ lat: trip.coords.start?.lat, lng: trip.coords.start?.lng }),
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
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      const start = {
        lat: trip.coords.start.lat,
        lng: trip.coords.start.lng,
      };

      directionsService.route(
        {
          origin: start,
          destination: generateEndPoint(),
          waypoints: generateWaypoints(),
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
  }, [isLoaded]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  const handleViewMap = (e) => {
    e.preventDefault();

    navigate(`/mapview`, trip);
    //post values
  };

  return (
    <div className='max-w-sm  h-[200px] bg-white border border-gray-200 rounded-lg shadow-md m-3'>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          className='rounded-t-lg'
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
      )}
      <div className='pt-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
            {trip.description}
          </h5>
        </a>
        <Link
          to={'/'}
          onClick={handleViewMap}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
          text-md border p-2 rounded-lg'>
          {/* <a
          href='#'
          onClick={handleViewMap}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
          text-md border p-2 rounded-lg'> */}
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
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default ItineraryItem;
