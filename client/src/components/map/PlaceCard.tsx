import { useState, useContext } from 'react';
import { Destination, DestinationContext } from '../../context';
import React from 'react';

export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  categories: string[];
  address: string;
}

interface PlaceCardProps {
  location: Location;
  handleAddPoint: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick: any; //dont think this is functional
}

const PlaceCard: React.FC<PlaceCardProps> = ({ location, onClick }) => {
  const { setDestination } = useContext(DestinationContext);

  const handleClick = () => {
    onClick(location.lat, location.lng);
  };

  const [likedPlace, setLikedPlace] = useState(false);

  const toggleFavourites = () => {
    setLikedPlace((prevLike) => {
      const newLikedPlace = !prevLike;
      if (newLikedPlace) {
        addToMap();
      }
      return newLikedPlace;
    });
  };

  const addToMap = () => {
    const newPoint = {
      id: null,
      name: location.name,
      lat: location.lat,
      lng: location.lng,
      categories: location.categories,
      address: location.address,
    };

    setDestination((prevDestination: Destination) => ({
      ...prevDestination,
      points: [...prevDestination.points, newPoint],
    }));
  };

  return (
    <div className='cursor-pointer label border-solid border-gray-200 border rounded-md mt-3 pl-3 pr-5'>
      <div data-flex className='flex-col'>
        <div className='font-semibold text-lg'>{location.name}</div>
        <div className='font-normal text-sm'>{location.address}</div>

        <div className='font-medium text-md bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text'>
          Vibe:{' '}
        </div>
        <div className='flex flex-row'>
          {location.categories.map((category) => (
            <p
              key={category}
              className='pr-2 text-sm bg-gradient-to-r from-orange-600 to-gray-400 inline-block text-transparent bg-clip-text '
            >
              {category}
            </p>
          ))}
        </div>
      </div>
      <div className='align-start justify-end'>
        <h3 className='text-xl h-8' onClick={toggleFavourites}>
          {likedPlace ? '✔️' : '♡'}
        </h3>
        <button
          className='text-md self-cente hover:text-gray-500 font-sm p-1'
          //NON FUNCTIONAL
          onClick={handleClick}
        >
          More Info +
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
