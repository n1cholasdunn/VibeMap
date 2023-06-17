// import '../../App.css';
// import { useRef, useState, useEffect, useMemo } from 'react';

// import {
//   GoogleMap,
//   Marker,
//   useLoadScript,
//   DirectionsRenderer,
// } from '@react-google-maps/api';

// const ViewMap = ({ trip }) => {
//   const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

//   const [googleLoaded, setGoogleLoaded] = useState(false);
//   const [directions, setDirections] = useState(null);

//   const autocompleteRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//     script.onload = () => {
//       setGoogleLoaded(true);
//     };
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const editUserTrip = () => {
//     console.log('something');
//   };

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
//   });

//   const generateEndPoint = () => {
//     if (trip.type === 'singleDestination') {
//       return null;
//     } else if (trip.type === 'oneWay') {
//       return { lat: trip.coords.end.lat, lng: trip.coords.end.lng };
//     } else if (trip.type === 'loopTrip') {
//       return { lat: trip.coords.start.lat, lng: trip.coords.start.lng };
//     }
//   };

//   const generateWaypoints = () => {
//     if (trip.type === 'singleDestination' || trip.type === 'oneWay') {
//       return null;
//     } else {
//       return [
//         { location: `${trip.coords.midpoint.lat},${trip.coords.midpoint.lng}` },
//         { location: `${trip.coords.end.lat},${trip.coords.end.lng}` },
//       ];
//     }
//   };

//   const center = useMemo(
//     () => ({ lat: trip.coords.start.lat, lng: trip.coords.start.lng }),
//     []
//   );

//   useEffect(() => {
//     if (isLoaded) {
//       const directionsService = new window.google.maps.DirectionsService();
//       const start = { lat: trip.coords.start.lat, lng: trip.coords.start.lng };

//       directionsService.route(
//         {
//           origin: start,
//           trip: generateEndPoint(),
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
//     <div className='flex flex-row p-6 z-[-1]'>
//       <div className='flex flex-col justify-end w-4/5 h-auto aspect-w-1 aspect-h-1'>
//         <div className='flex flex-row py-2 self'>
//           <h1>TRIP NAME HERE</h1>
//         </div>

//         {!isLoaded ? (
//           <h1>Loading...</h1>
//         ) : (
//           <GoogleMap
//             mapContainerClassName='map-container'
//             center={center}
//             zoom={20}>
//             {directions && (
//               <DirectionsRenderer
//                 directions={directions}
//                 options={{
//                   polylineOptions: {
//                     strokeColor: 'blue',
//                   },
//                 }}
//               />
//             )}

//             <>
//               <Marker
//                 position={{
//                   lat: trip.coords.start.lat,
//                   lng: trip.coords.start.lng,
//                 }}
//                 icon={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
//               />

//               {trip.coords.midpoint !== null &&
//                 trip.coords.midpoint !== undefined && (
//                   <Marker
//                     position={{
//                       lat: trip.coords.midpoint.lat,
//                       lng: trip.coords.midpoint.lng,
//                     }}
//                     icon={
//                       'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
//                     }
//                   />
//                 )}
//               {trip.coords.end !== null && trip.coords.end !== undefined && (
//                 <Marker
//                   position={{
//                     lat: trip.coords.end.lat,
//                     lng: trip.coords.end.lng,
//                   }}
//                   icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
//                 />
//               )}
//             </>

//             {trip.points.map((location) => (
//               <Marker
//                 key={location.name}
//                 position={{
//                   lat: location.lat,
//                   lng: location.lng,
//                 }}
//               />
//             ))}
//           </GoogleMap>
//         )}
//       </div>
//       <div className='pl-6 pr-6'>
//         <div className='flex justify-end'>
//           <button
//             type='submit'
//             className='
//                     hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
//                     text-md font-semibold border p-2 h-10 rounded-lg '
//             onSubmit={editUserTrip}>
//             Edit Map ✎
//           </button>
//         </div>

//         <div className='overflow-scroll h-[500px] w-[500px] overflow-y-scroll no-scrollbar'>
//           {trip.points.map((location) => (
//             <div className='cursor-pointer label border-solid border-gray-200 border rounded-md mt-3 pl-3 pr-5 '>
//               <div flex flex-col>
//                 <div className='font-semibold text-lg'>{location.name}</div>
//                 <div className='font-normal text-sm'>{location.address}</div>

//                 <div className='font-medium text-md bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text'>
//                   Vibe:{' '}
//                 </div>
//                 <div className='flex flex-row'>
//                   {location.categories.map((category) => (
//                     <p className='pr-2 text-sm bg-gradient-to-r from-orange-600 to-gray-400 inline-block text-transparent bg-clip-text '>
//                       {category}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <button className='text-md self-cente hover:text-gray-500 font-normal p-1'>
//                   More Info +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewMap;
