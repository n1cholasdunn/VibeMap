// import {
//   GoogleMap,
//   Marker,
//   useLoadScript,
//   DirectionsRenderer,
//   InfoWindow,
// } from '@react-google-maps/api';
// import { useEffect, useMemo, useState, useContext } from 'react';
// import '../../App.css';
// import locations from '../../db.json';
// import MapInfoWindow from './MapInfoWindow';
// import { DestinationContext } from '../../context';

// const GMap = ({ filteredLocations }) => {
//   const [destination] = useContext(DestinationContext);
//   const [directions, setDirections] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
//   });

//   const generateEndPoint = () => {
//     if (destination.type === 'singleDestination') {
//       return null;
//     } else if (destination.type === 'oneWay') {
//       return {
//         lat: destination.coords.end.lat,
//         lng: destination.coords.end.lng,
//       };
//     } else if (destination.type === 'loopTrip') {
//       return {
//         lat: destination.coords.start.lat,
//         lng: destination.coords.start.lng,
//       };
//     }
//   };

//   const generateWaypoints = () => {
//     if (
//       destination.type === 'singleDestination' ||
//       destination.type === 'oneWay'
//     ) {
//       return null;
//     } else {
//       return [
//         {
//           location: `${destination.coords.midpoint.lat},${destination.coords.midpoint.lng}`,
//         },
//         {
//           location: `${destination.coords.end.lat},${destination.coords.end.lng}`,
//         },
//       ];
//     }
//   };

//   const center = useMemo(
//     () => ({
//       lat: destination.coords.start.lat,
//       lng: destination.coords.start.lng,
//     }),
//     []
//   );

//   useEffect(() => {
//     if (isLoaded) {
//       const directionsService = new window.google.maps.DirectionsService();
//       const start = {
//         lat: destination.coords.start.lat,
//         lng: destination.coords.start.lng,
//       };

//       directionsService.route(
//         {
//           origin: start,
//           destination: generateEndPoint(),
//           waypoints: generateWaypoints(),
//           optimizeWaypoints: true,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirections(result);
//           } else {
//             console.error(`Error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   }, [isLoaded]);
//   if (loadError) {
//     return <div>Error loading Google Maps</div>;
//   }

//   return (
//     <>
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName='map-container'
//           center={center}
//           zoom={20}>
//           {directions && (
//             <DirectionsRenderer
//               directions={directions}
//               options={{
//                 polylineOptions: {
//                   strokeColor: 'blue',
//                 },
//               }}
//             />
//           )}

//           <>
//             <Marker
//               position={{
//                 lat: destination.coords.start.lat,
//                 lng: destination.coords.start.lng,
//               }}
//               icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
//             />

//             {destination.coords.midpoint !== null &&
//               destination.coords.midpoint !== undefined && (
//                 <Marker
//                   position={{
//                     lat: destination.coords.midpoint.lat,
//                     lng: destination.coords.midpoint.lng,
//                   }}
//                   icon={
//                     'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
//                   }
//                 />
//               )}
//             {destination.coords.end !== null &&
//               destination.coords.end !== undefined && (
//                 <Marker
//                   position={{
//                     lat: destination.coords.end.lat,
//                     lng: destination.coords.end.lng,
//                   }}
//                   icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
//                 />
//               )}
//           </>

//           {locations.filter(filteredLocations).map((location) => (
//             <Marker

//               key={location.id}

//               position={{
//                 lat: location.lat,
//                 lng: location.lng,
//               }}
//               onClick={() => {
//                 setSelectedLocation(location);
//               }}
//             />
//           ))}
//           {selectedLocation && (
//             <InfoWindow
//               position={{
//                 lat: selectedLocation.lat,
//                 lng: selectedLocation.lng,
//               }}
//               onCloseClick={() => {
//                 setSelectedLocation(null);
//               }}>
//               <MapInfoWindow
//                 selectedLocation={selectedLocation}></MapInfoWindow>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       )}
//     </>
//   );
// };

// export default GMap;
