import React, { useEffect, useState } from 'react';
import ItineraryItem from '../components/user/ItineraryItem';
import { getUserTrips } from '../services/tripService';

const UserProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    async function fetchUserTrips() {
      try {
        const trips = await getUserTrips();
        setUserTrips(trips);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserTrips();
  }, []);

  const directToHome = () => {
    return (window.location.href = '/');
  };

  return (
    <>
      <div className='p-4 mx-3 lg:py-8 lg:px-6 flex justify-center flex-row'>
        <div className='lg:w-1/4 p-5 min-w-56' id='user-profile'>
          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded-full'
              src='IMG_7069.jpg'
              alt='profile pic'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <h3 className='py-3'>Juliana Ribas</h3>
            </h3>
            <h4 className='mb-1 text-1xl font-bold tracking-tight text-gray-900'>
              Embrace the world as your playground and let your travels paint
              the canvas of your soul!
            </h4>
            <p className='py-5'>
              "Hi there! I'm Juliana, a travel enthusiast and storyteller. Join
              me as I navigate the globe, seeking immersive cultural
              experiences, hidden gems, and breathtaking landscapes. Let's
              ignite the spirit of adventure and inspire each other to live a
              life filled with exploration and discovery!"
            </p>
          </div>
        </div>

        <div>
          <div className='flex justify-end p-10'>
            <button
              type='submit'
              onClick={directToHome}
              className='
							hover:text-white text-white hover:bg-gray-500 bg-gradient-to-r from-blue-600 to-indigo-400   hover:drop-shadow-lg
							text-md font-semibold border p-2 rounded-lg w-1/4'
            >
              Create Map +
            </button>
          </div>

          <div className='grid grid-cols-2 h-[650px] gap-4 p-5'>
            {/* {userTrips.map((trip) => (                       COMMENTED OUT TEMPRARLY AS ITS CAUSING CRASHES
              <ItineraryItem trip={trip} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
