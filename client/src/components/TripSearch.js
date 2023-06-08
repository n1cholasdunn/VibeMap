import { useState } from 'react';


import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    // Link
    useNavigate
} from 'react-router-dom'


function TripSearch({ selectedTripOption }) {
    const [tripLocations, setTripLocations] = useState({
        start: null,
        midpoint: null,
        end: null,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTripLocations(values => ({ ...values, [name]: tripLocations }))
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit')
        navigate('/create')
        const newTrip = tripLocations;
        //open create map page
        //send newTrip values to create map page
        //post values
    }

    return (
        <>
            {/* -------------------------- ONE WAY TRIP ---------------------------------- */}
            {selectedTripOption === 'oneWay' &&
                <div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
                    For one-way trips, enter your start and end points.
                    <form
                        id="one-way-trip"
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center justify-center'
                    >
                        <div>
                            <input
                                placeholder="Start"
                                className="border border-gray-500 m-2.5"
                                name='start'
                                onChange={handleChange}
                                value={tripLocations.start}
                            >
                            </input>
                            <input
                                placeholder="End"
                                className="border border-gray-500 m-2.5"
                                name='end'
                                onChange={handleChange}
                                value={tripLocations.end}
                            >
                            </input>
                        </div>
                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go!
                        </button>
                    </form>
                    <p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>

                </div>
            }

            {/* -------------------------- SINGLE DESTINATION ---------------------------------- */}

            {selectedTripOption === 'singleDestination' &&
                <div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
                    For a single destination, enter the main location you want to visit.
                    <form
                        id="one-way-trip"
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center justify-center'
                    >
                        <input
                            placeholder="Destination"
                            className="border border-gray-500 m-2.5"
                            name='start'
                            onChange={handleChange}
                            value={tripLocations.start}
                        >
                        </input>

                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go!
                        </button>
                    </form>
                    <p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>
                </div>
            }
            {/* -------------------------- LOOP TRIP ---------------------------------- */}
            {selectedTripOption === 'loopTrip' &&

                <div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
                    For round trips, enter the start and end points, and the name of a place half way down.
                    <form
                        id="one-way-trip"
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center justify-center'
                    >
                        <div>
                            <input
                                placeholder="Start"
                                className="border border-gray-500 m-2.5"
                                name='start'
                                onChange={handleChange}
                                value={tripLocations.start}
                            >
                            </input>
                            <input
                                placeholder="Midpoint"
                                className="border border-gray-500 m-2.5"
                                name='midpoint'
                                onChange={handleChange}
                                value={tripLocations.midpoint}
                            >
                            </input>
                            <input
                                placeholder="End"
                                className="border border-gray-500 m-2.5"
                                name='end'
                                onChange={handleChange}
                                value={tripLocations.end}
                            >
                            </input>
                        </div>
                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go!
                        </button>
                    </form>
                    <p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>

                </div>

            }
        </>
    )

}

export default TripSearch