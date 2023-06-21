import TripChoice from '../components/map/TripChoice';
import React from 'react';
// import bvibe from '../../public/1bvibe.png';

const Home: React.FC = () => {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: 'url(pexels-roman-odintsov-4553618.jpg)' }}
      >
        <div className='hero-overlay bg-opacity-50'></div>
        <div className='hero-content text-center'>
          <div className='max-w-lg'>
            <div className='flex flex-row align-middle justify-center text-center'>
              <h1 className=' self-end pl-3 mb-5 text-5xl font-bold text-white drop-shadow-lg'>
                Hey{' '}
              </h1>
              <img
                src='1bvibe.png'
                className='h-28 mb-5 self-end pl-3'
                alt='placeholder'
              />
              <h1 className=' self-end pl-3 font-pacifico mb-5 text-5xl font-bold text-white drop-shadow-lg'>
                Vibe{' '}
              </h1>
              <h1 className=' self-end mb-5 pl-3 text-5xl font-bold text-white drop-shadow-lg'>
                Seeker
              </h1>
            </div>
            <p className='mb-20 text-lg text-white drop-shadow-lg'>
              Discover Your Roadtrip Vibe and Create the Perfect Map!
            </p>
            <div className='rounded-md'></div>
            <TripChoice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
