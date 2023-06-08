import { useState } from 'react';
import TripSearch from './TripSearch';

function Explore() {


    const [selectedTripOption, setSelectedTripOption] = useState('');
    const handleOptionChange = (event) => {
        console.log(event.target.value)
        setSelectedTripOption(event.target.value);
        //render correct destination input boxes
    };

    return (
        < div className="flex flex-col items-center justify-center min-h-72 border-dashed border-2 border-green-800" >
            <div>
                <h3>
                    Which type of trip suits your vibe?
                </h3>
            </div>
            <form className='p-2.5'>
                <label className='m-2.5'>
                    <input
                        name="trip-option"
                        type="radio"
                        value="oneWay"
                        checked={selectedTripOption === 'oneWay'}
                        onChange={handleOptionChange}
                        className='mr-1.5'
                    />
                    One-Way
                </label>
                <label className='m-2.5'>
                    <input
                        name="trip-option"
                        type="radio"
                        value="singleDestination"
                        checked={selectedTripOption === 'singleDestination'}
                        onChange={handleOptionChange}
                        className='mr-1.5'

                    />
                    Single Destination
                </label>
                <label className='m-2.5'>
                    <input
                        name="trip-option"
                        type="radio"
                        value="loopTrip"
                        checked={selectedTripOption === 'loopTrip'}
                        onChange={handleOptionChange}
                        className='mr-1.5'
                    />
                    Loop
                </label>
            </form>
            <TripSearch selectedTripOption={selectedTripOption} />
        </div >
    )

}

export default Explore

