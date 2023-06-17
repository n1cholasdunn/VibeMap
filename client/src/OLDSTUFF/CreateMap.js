// import CategorySearch from './CategorySearch';
// import GMap from './GMap';
// import '../../App.css';
// import { useRef, useState, useEffect, useContext } from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { DestinationContext } from '../../context';
// import PlaceCard from './PlaceCard';
// import locations from '../../db.json';
// import { postUserTrip } from '../../services/tripService';
// import { getDistance } from 'geolib';
// import { fetchPlaceInfo } from '../../services/googlePlacesService';

// const CreateMap = () => {
//   const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

//   const [destination, setDestination, clearDestination] =
//     useContext(DestinationContext);
//   const [selectedPlaceFromSearch, setSelectedPlaceFromSearch] = useState(null);
//   const [googleLoaded, setGoogleLoaded] = useState(false);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [tripDescription, setTripDescription] = useState('');

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

//   const handlePlaceSelect = () => {
//     const place = autocompleteRef.current.getPlace();
//     if (!place.geometry || !place.geometry.location) {
//       return;
//     }
//     setSelectedPlaceFromSearch(place);
//   };

//   const handleAddPoint = (e) => {
//     e.preventDefault();

//     if (selectedPlaceFromSearch) {
//       const { geometry } = selectedPlaceFromSearch;
//       const { lat, lng } = geometry.location;
//       const newPoint = {
//         id: null,
//         name: selectedPlaceFromSearch.formatted_address,
//         lat: lat(),
//         lng: lng(),
//         categories: [],
//         address: selectedPlaceFromSearch.address_components,
//       };

//       setDestination((prevDestination) => ({
//         ...prevDestination,
//         points: [...prevDestination.points, newPoint],
//       }));
//       console.log('search place: ', destination);

//       setSelectedPlaceFromSearch('');
//       autocompleteRef.current.value = '';
//     }
//   };

//   const sortedLocations = locations.sort((a, b) => {
//     const distanceA = getDistance(
//       {
//         latitude: destination.coords.start.lat,
//         longitude: destination.coords.start.lng,
//       },
//       { latitude: a.lat, longitude: a.lng }
//     );
//     const distanceB = getDistance(
//       {
//         latitude: destination.coords.start.lat,
//         longitude: destination.coords.start.lng,
//       },
//       { latitude: b.lat, longitude: b.lng }
//     );
//     return distanceA - distanceB;
//   });

//   const filteredLocations = (location) => {
//     const selectedCategoriesObj = selectedCategories.map(
//       (cat) => cat.categoryName
//     );
//     for (let category of location.categories) {
//       if (selectedCategoriesObj.includes(category)) {
//         return true;
//       }
//     }
//     return false;
//   };

//   const handleSubmitTrip = async (e) => {
//     e.preventDefault();
//     console.log(tripDescription);
//     setDestination((prevDestination) => ({
//       ...prevDestination,
//       description: tripDescription,
//     }));

//     await new Promise((resolve) => setTimeout(resolve, 0));

//     const newDestination = {
//       ...destination,
//       user: 1,
//       id: `34567890kjnbvt6789${Math.round(Math.random() * 100000)}`,
//     };

//     await postUserTrip(newDestination, clearDestination);
//     //create condition to PUT instead of post if destination is already created by user
//     console.log(newDestination);
//   };

//   const openPlaceInfo = async (lat, lng, name) => {
//     const res = await fetchPlaceInfo(lat, lng, name);
//     console.log('res ==> ', res);
//   };

//   return (
//     <>
//       <div className='flex flex-row justify-center p-6 z-[-1]'>
//         <div className='flex flex-col  justify-end w-4/5 h-auto aspect-w-1 aspect-h-1'>
//           <GMap filteredLocations={filteredLocations} />
//           <form className='flex flex-row py-2 self' onSubmit={handleSubmitTrip}>
//             <input
//               placeholder='Give your trip a name...'
//               value={tripDescription}
//               onChange={(e) => setTripDescription(e.target.value)}
//               className='border rounded-lg border-gray-300 pl-2 h-full w-full mr-2'></input>
//             <button
//               type='submit'
//               className='
// 							hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
// 							text-md font-semibold border p-2 rounded-lg w-1/6'>
//               Save Map ♡
//             </button>
//           </form>
//         </div>
//         <div className='pl-6 pr-6'>
//           <CategorySearch
//             selectedCategories={selectedCategories}
//             setSelectedCategories={setSelectedCategories}
//           />
//           <form className='flex flex-row justify-between w-full mt-2.5 h-10'>
//             <Autocomplete
//               apiKey={apiKey}
//               onLoad={(autocomplete) => {
//                 autocompleteRef.current = autocomplete;
//                 autocomplete.setFields(['geometry']);
//               }}
//               onPlaceChanged={handlePlaceSelect}
//               className='z-[0] w-3/4 '>
//               <input
//                 placeholder='Search for a place...'
//                 className='border rounded-full border-gray-300 pl-2 h-full w-full'
//                 name='start'
//                 value={
//                   destination.points
//                     ? destination.points.formatted_address
//                     : destination.points
//                 }
//               />
//             </Autocomplete>

//             <button
//               type='submit'
//               onClick={handleAddPoint}
//               className='
// 							hover:text-white hover:bg-gray-400 hover:drop-shadow-lg

// 							text-sm border border-gray-300 p-2 rounded-xl w-28 h-full'>
//               + Add to Map
//             </button>
//           </form>

//           <div className='overflow-scroll overflow-y-scroll no-scrollbar h-[500px]'>
//             {sortedLocations.filter(filteredLocations).map((location) => (
//               <PlaceCard
//                 location={location}
//                 handleAddPoint={handleAddPoint}
//                 onClick={() =>
//                   openPlaceInfo(location.lat, location.lng, location.name)
//                 }
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateMap;
