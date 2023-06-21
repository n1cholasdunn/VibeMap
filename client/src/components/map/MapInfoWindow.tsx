import { Destination, DestinationContext } from '../../context';
import { useContext, useState } from 'react';
import React from 'react';

interface SelectedLocation {
  name: string;
  lat: number;
  lng: number;
  categories: [string];
  address: string;
}

interface MapInfoWindowProp {
  selectedLocation: SelectedLocation;
}

const MapInfoWindow: React.FC<MapInfoWindowProp> = ({ selectedLocation }) => {
  const { setDestination } = useContext(DestinationContext);

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
      name: selectedLocation.name,
      lat: selectedLocation.lat,
      lng: selectedLocation.lng,
      categories: selectedLocation.categories,
      address: selectedLocation.address,
    };

    setDestination((prevDestination: Destination) => ({
      ...prevDestination,
      points: [...prevDestination.points, newPoint],
    }));
  };

  return (
    <div className='h-30'>
      <div className='text-lg pb-2 font-medium'>{selectedLocation.name}</div>
      <div className='font-normal text-md'>Vibe:</div>
      <div className='flex flex-row flex-wrap'>
        {selectedLocation.categories.map((category) => (
          <div className='pr-2 text-md py-1 bg-gradient-to-r from-orange-600 to-gray-400 inline-block text-transparent bg-clip-text '>
            {category}
          </div>
        ))}
      </div>
      <div className='flex flex-col align-middle'>
        <button
          className='hover:text-white hover:bg-gray-400 hover:drop-shadow-lg text-md drop-shadow-md border p-1 rounded'
          onClick={toggleFavourites}
        >
          {likedPlace ? '𝗫 Remove' : '♡ Add to Map'}
        </button>
        <button className='text-md self-cente hover:text-gray-500 font-normal p-1'>
          More Info +
        </button>
      </div>
    </div>
  );
};

export default MapInfoWindow;
