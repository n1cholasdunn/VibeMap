// import { useState } from 'react';
// import TripSearch from '../map/TripSearch';
// import '../../App.css';

// const Explore = () => {
//   const [selectedTripOption, setSelectedTripOption] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedTripOption(event.target.value);
//   };

//   return (
//     <div className='flex flex-col opacity-80 w-[468px] rounded-lg drop-shadow-2xl items-center justify-center min-h-72  p-7 bg-white'>
//       <p className='text-slate-500'>Select Your Preferred Roadtrip Vibe:</p>
//       <form className='p-2.5'>
//         <label className='m-2.5'>
//           <input
//             name='trip-option'
//             type='radio'
//             value='oneWay'
//             checked={selectedTripOption === 'oneWay'}
//             onChange={handleOptionChange}
//             className='mr-1.5'
//           />
//           One-Way
//         </label>
//         <label className='m-2.5'>
//           <input
//             name='trip-option'
//             type='radio'
//             value='singleDestination'
//             checked={selectedTripOption === 'singleDestination'}
//             onChange={handleOptionChange}
//             className='mr-1.5  '
//           />
//           Single Destination
//         </label>
//         <label className='m-2.5'>
//           <input
//             name='trip-option'
//             type='radio'
//             value='loopTrip'
//             checked={selectedTripOption === 'loopTrip'}
//             onChange={handleOptionChange}
//             className='mr-1.5'
//           />
//           Loop
//         </label>
//       </form>
//       {selectedTripOption && (
//         <TripSearch selectedTripOption={selectedTripOption} />
//       )}
//     </div>
//   );
// };

// export default Explore;
