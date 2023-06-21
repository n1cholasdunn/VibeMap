import { useRef, useState, useEffect, useContext, FormEvent } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { DestinationContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Destination } from '../../context';
import { AutoComplete, Place } from '../../Pages/CreateTrip';
import { apiKey } from '../../helpers/apiKey';
interface TripSearchProps {
  selectedTripOption: string;
}

const TripSearch: React.FC<TripSearchProps> = ({ selectedTripOption }) => {
  const { destination, setDestination } = useContext(DestinationContext);

  const [googleLoaded, setGoogleLoaded] = useState(false);
  const autocompleteRefA = useRef<AutoComplete>({} as AutoComplete);
  const autocompleteRefB = useRef<AutoComplete>({} as AutoComplete);
  const autocompleteRefC = useRef<AutoComplete>({} as AutoComplete);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=Function.prototype`;
    script.onload = () => {
      setGoogleLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePlaceSelect = (place: Place, name: string) => {
    const { geometry } = place;
    if (geometry) {
      if (geometry.location) {
        const { lat, lng } = geometry.location;
        setDestination((prevDestination: Destination) => ({
          ...prevDestination,
          type: selectedTripOption,
          coords: {
            ...prevDestination.coords,
            [name]: {
              lat: lat(),
              lng: lng(),
            },
          },
        }));
      }
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/create');
  };

  return (
    <>
      {googleLoaded && (
        <>
          {selectedTripOption === 'oneWay' && (
            <div className='flex flex-col items-center justify-center h-72 '>
              For one-way trips, enter your start and end coords.
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center'
              >
                <div>
                  <div className='relative'>
                    <Autocomplete
                      // apiKey={apiKey} MIGHT BE UNNECESSARY
                      onLoad={(autocomplete) => {
                        autocompleteRefA.current = autocomplete;
                        autocomplete.setFields(['geometry']);
                      }}
                      onPlaceChanged={() =>
                        handlePlaceSelect(
                          autocompleteRefA.current.getPlace(),
                          'start'
                        )
                      }
                      className='z-[100000]'
                    >
                      <input
                        placeholder='Start'
                        className='border border-gray-500 m-2.5 pl-2 '
                        name='start'
                        value={
                          destination.coords.start
                            ? destination.coords.start.formatted_address
                            : destination.coords.start
                        }
                      />
                    </Autocomplete>
                  </div>

                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocompleteRefB.current = autocomplete;
                      autocomplete.setFields(['geometry']);
                    }}
                    onPlaceChanged={() =>
                      handlePlaceSelect(
                        autocompleteRefB.current.getPlace(),
                        'end'
                      )
                    }
                    className='z-[100000]'
                  >
                    <input
                      placeholder='End'
                      className='border border-gray-500 m-2.5 pl-2'
                      name='end'
                      value={
                        destination.coords.end
                          ? destination.coords.end.formatted_address
                          : destination.coords.end
                      }
                    />
                  </Autocomplete>
                </div>
                <button
                  type='submit'
                  className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '
                >
                  Go!
                </button>
              </form>
            </div>
          )}

          {selectedTripOption === 'singleDestination' && (
            <div className='flex flex-col items-center justify-center h-72 '>
              For a single destination, enter the main location you want to
              visit.
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center'
              >
                <Autocomplete
                  // apiKey={apiKey} MIGHT BE UNNECESSARY
                  onLoad={(autocomplete) => {
                    autocompleteRefA.current = autocomplete;
                    autocomplete.setFields(['geometry']);
                  }}
                  onPlaceChanged={() =>
                    handlePlaceSelect(
                      autocompleteRefA.current.getPlace(),
                      'start'
                    )
                  }
                >
                  <input
                    placeholder='Destination'
                    className='border border-gray-500 m-2.5 pl-2'
                    name='start'
                    value={
                      destination.coords.start
                        ? destination.coords.start.formatted_address
                        : destination.coords.start
                    }
                  />
                </Autocomplete>
                <button
                  type='submit'
                  className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '
                >
                  Go!
                </button>
              </form>
            </div>
          )}

          {selectedTripOption === 'loopTrip' && (
            <div className='flex flex-col items-center justify-center h-72'>
              For round trips, enter the start and end coords, and the name of a
              place half way down.
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center'
              >
                <div>
                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocompleteRefA.current = autocomplete;
                      autocomplete.setFields(['geometry']);
                    }}
                    onPlaceChanged={() =>
                      handlePlaceSelect(
                        autocompleteRefA.current.getPlace(),
                        'start'
                      )
                    }
                  >
                    <input
                      placeholder='Start'
                      className='border border-gray-500 m-2.5 pl-2'
                      name='start'
                      value={
                        destination.coords.start
                          ? destination.coords.start.formatted_address
                          : destination.coords.start
                      }
                    />
                  </Autocomplete>
                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocompleteRefB.current = autocomplete;
                      autocomplete.setFields(['geometry']);
                    }}
                    onPlaceChanged={() =>
                      handlePlaceSelect(
                        autocompleteRefB.current.getPlace(),
                        'midpoint'
                      )
                    }
                  >
                    <input
                      placeholder='Midpoint'
                      className='border border-gray-500 m-2.5 pl-2'
                      name='midpoint'
                      value={
                        destination.coords.midpoint
                          ? destination.coords.midpoint.formatted_address
                          : destination.coords.midpoint
                      }
                    />
                  </Autocomplete>
                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocompleteRefC.current = autocomplete;
                      autocomplete.setFields(['geometry']);
                    }}
                    onPlaceChanged={() =>
                      handlePlaceSelect(
                        autocompleteRefC.current.getPlace(),
                        'end'
                      )
                    }
                  >
                    <input
                      placeholder='End'
                      className='border border-gray-500 m-2.5 pl-2'
                      name='end'
                      value={
                        destination.coords.end
                          ? destination.coords.end.formatted_address
                          : destination.coords.end
                      }
                    />
                  </Autocomplete>
                </div>
                <button
                  type='submit'
                  className='	hover:text-white text-white hover:bg-gray-500 bg-gray-600 hover:drop-shadow-lg
									text-md font-semibold p-2 rounded-lg text-sm border border-gray-300  w-28 h-full mt-5 py-2 px-4 '
                >
                  Go!
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TripSearch;
