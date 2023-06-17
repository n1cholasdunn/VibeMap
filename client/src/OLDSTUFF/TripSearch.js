// import { useRef, useState, useEffect, useContext } from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { DestinationContext } from '../../context';
// import { useNavigate } from 'react-router-dom';

// const TripSearch = ({ selectedTripOption }) => {
//   const [destination, setDestination] = useContext(DestinationContext);
//   const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

//   const [googleLoaded, setGoogleLoaded] = useState(false);
//   const autocompleteRefA = useRef(null);
//   const autocompleteRefB = useRef(null);
//   const autocompleteRefC = useRef(null);

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

//   const handlePlaceSelect = (place, name) => {
//     const { geometry } = place;
//     if (geometry) {
//       console.log('geometry', geometry);
//       console.log('place', place);
//       console.log('name', name);

//       const { lat, lng } = geometry.location;
//       setDestination((prevDestination) => ({
//         ...prevDestination,
//         type: selectedTripOption,
//         coords: {
//           ...prevDestination.coords,
//           [name]: {
//             name: place.formatted_address, //returns undefined
//             lat: lat(),
//             lng: lng(),
//           },
//         },
//       }));
//     }
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('tripsearch', destination);
//     navigate('/create');
//   };

//   return (
//     <>
//       {/* -------------------------- ONE WAY TRIP ---------------------------------- */}
//       {googleLoaded && (
//         <>
//           {selectedTripOption === 'oneWay' && (
//             <div className='flex flex-col items-center justify-center h-72 '>
//               For one-way trips, enter your start and end coords.
//               <form
//                 onSubmit={handleSubmit}
//                 className='flex flex-col items-center justify-center'>
//                 <div>
//                   <div className='relative'>
//                     <Autocomplete
//                       apiKey={apiKey}
//                       onLoad={(autocomplete) => {
//                         autocompleteRefA.current = autocomplete;
//                         autocomplete.setFields(['geometry']);
//                       }}
//                       onPlaceChanged={() =>
//                         handlePlaceSelect(
//                           autocompleteRefA.current.getPlace(),
//                           'start'
//                         )
//                       }
//                       className='z-[100000]'>
//                       <input
//                         placeholder='Start'
//                         className='border border-gray-500 m-2.5 pl-2 '
//                         name='start'
//                         value={
//                           destination.coords.start
//                             ? destination.coords.start.formatted_address
//                             : destination.coords.start
//                         }
//                       />
//                     </Autocomplete>
//                   </div>

//                   <Autocomplete
//                     apiKey={apiKey}
//                     onLoad={(autocomplete) => {
//                       autocompleteRefB.current = autocomplete;
//                       autocomplete.setFields(['geometry']);
//                     }}
//                     onPlaceChanged={() =>
//                       handlePlaceSelect(
//                         autocompleteRefB.current.getPlace(),
//                         'end'
//                       )
//                     }
//                     className='z-[100000]'>
//                     <input
//                       placeholder='End'
//                       className='border border-gray-500 m-2.5 pl-2'
//                       name='end'
//                       value={
//                         destination.coords.end
//                           ? destination.coords.end.formatted_address
//                           : destination.coords.end
//                       }
//                     />
//                   </Autocomplete>
//                 </div>
//                 <button
//                   type='submit'
//                   className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
// 									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '>
//                   Go!
//                 </button>
//               </form>
//             </div>
//           )}

//           {/* -------------------------- SINGLE DESTINATION ---------------------------------- */}

//           {selectedTripOption === 'singleDestination' && (
//             <div className='flex flex-col items-center justify-center h-72 '>
//               For a single destination, enter the main location you want to
//               visit.
//               <form
//                 onSubmit={handleSubmit}
//                 className='flex flex-col items-center justify-center'>
//                 <Autocomplete
//                   apiKey={apiKey}
//                   onLoad={(autocomplete) => {
//                     autocompleteRefA.current = autocomplete;
//                     autocomplete.setFields(['geometry']);
//                   }}
//                   onPlaceChanged={() =>
//                     handlePlaceSelect(
//                       autocompleteRefA.current.getPlace(),
//                       'start'
//                     )
//                   }>
//                   <input
//                     placeholder='Destination'
//                     className='border border-gray-500 m-2.5 pl-2'
//                     name='start'
//                     value={
//                       destination.coords.start
//                         ? destination.coords.start.formatted_address
//                         : destination.coords.start
//                     }
//                   />
//                 </Autocomplete>
//                 <button
//                   type='submit'
//                   className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
// 									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '>
//                   Go!
//                 </button>
//               </form>
//             </div>
//           )}
//           {/* -------------------------- LOOP TRIP ---------------------------------- */}
//           {selectedTripOption === 'loopTrip' && (
//             <div className='flex flex-col items-center justify-center h-72'>
//               For round trips, enter the start and end coords, and the name of a
//               place half way down.
//               <form
//                 onSubmit={handleSubmit}
//                 className='flex flex-col items-center justify-center'>
//                 <div>
//                   <Autocomplete
//                     apiKey={apiKey}
//                     onLoad={(autocomplete) => {
//                       autocompleteRefA.current = autocomplete;
//                       autocomplete.setFields(['geometry']);
//                     }}
//                     onPlaceChanged={() =>
//                       handlePlaceSelect(
//                         autocompleteRefA.current.getPlace(),
//                         'start'
//                       )
//                     }>
//                     <input
//                       placeholder='Start'
//                       className='border border-gray-500 m-2.5 pl-2'
//                       name='start'
//                       value={
//                         destination.coords.start
//                           ? destination.coords.start.formatted_address
//                           : destination.coords.start
//                       }
//                     />
//                   </Autocomplete>
//                   <Autocomplete
//                     apiKey={apiKey}
//                     onLoad={(autocomplete) => {
//                       autocompleteRefB.current = autocomplete;
//                       autocomplete.setFields(['geometry']);
//                     }}
//                     onPlaceChanged={() =>
//                       handlePlaceSelect(
//                         autocompleteRefB.current.getPlace(),
//                         'midpoint'
//                       )
//                     }>
//                     <input
//                       placeholder='Midpoint'
//                       className='border border-gray-500 m-2.5 pl-2'
//                       name='midpoint'
//                       value={
//                         destination.coords.midpoint
//                           ? destination.coords.midpoint.formatted_address
//                           : destination.coords.midpoint
//                       }
//                     />
//                   </Autocomplete>
//                   <Autocomplete
//                     apiKey={apiKey}
//                     onLoad={(autocomplete) => {
//                       autocompleteRefC.current = autocomplete;
//                       autocomplete.setFields(['geometry']);
//                     }}
//                     onPlaceChanged={() =>
//                       handlePlaceSelect(
//                         autocompleteRefC.current.getPlace(),
//                         'end'
//                       )
//                     }>
//                     <input
//                       placeholder='End'
//                       className='border border-gray-500 m-2.5 pl-2'
//                       name='end'
//                       value={
//                         destination.coords.end
//                           ? destination.coords.end.formatted_address
//                           : destination.coords.end
//                       }
//                     />
//                   </Autocomplete>
//                 </div>
//                 <button
//                   type='submit'
//                   className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
// 									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '>
//                   Go!
//                 </button>
//               </form>
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default TripSearch;
