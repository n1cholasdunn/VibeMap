import CategorySearch from "./CategorySearch"
import GMap from "./GMap"
import '../App.css';
import { useRef, useState, useEffect, useContext } from 'react';
import { Autocomplete } from "@react-google-maps/api";
import { DestinationContext } from '../context';
import PlaceCard from "./PlaceCard";
import locations from "../db.json"

function CreateMap() {

	const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

	const [destination, setDestination] = useContext(DestinationContext)
	const [selectedPlace, setSelectedPlace] = useState(null)
	const [googleLoaded, setGoogleLoaded] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState([])

	const autocompleteRef = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
		script.onload = () => {
			setGoogleLoaded(true);
		};
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	const handlePlaceSelect = () => {
		const place = autocompleteRef.current.getPlace();
		if (!place.geometry || !place.geometry.location) {
			return;
		}
		setSelectedPlace(place);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (selectedPlace) {
			const { geometry } = selectedPlace;
			const { lat, lng } = geometry.location;
			const newPoint = {
				id: null,
				name: selectedPlace.formatted_address,
				lat: lat(),
				lng: lng(),
				categories: [],
				address: selectedPlace.address_components,
			};

			setDestination((prevDestination) => ({
				...prevDestination,
				points: [...prevDestination.points, newPoint],
			}));
			console.log("search place: ", destination);

			setSelectedPlace('')
			autocompleteRef.current.value = ''
		}
	};

	const filteredLocations = (location) => {
		const selectedCategoriesObj = selectedCategories.map(cat => cat.categoryName);
		for (let category of location.categories) {
			if (selectedCategoriesObj.includes(category)) {
				return true
			}
		}
		return false
	}


	return (
		<>
			<div className="flex flex-row justify-center p-6 z-[-1]" >
				<div className="flex flex-col  justify-end w-4/5 h-[650px] aspect-w-1 aspect-h-1">
					<GMap filteredLocations={filteredLocations} />
					<form>
						<input placeholder="Give your trip a name"></input>
						<button
							type='submit'
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">
							Save Map!
						</button>
					</form>
				</div>
				<div className="pl-6 pr-6">
					<CategorySearch selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
					<form className='flex flex-row justify-between w-full mt-2.5 h-10'>
						<Autocomplete
							apiKey={apiKey}
							onLoad={autocomplete => {
								autocompleteRef.current = autocomplete;
								autocomplete.setFields(['geometry']);
							}}
							onPlaceChanged={handlePlaceSelect}
							className='z-[0] w-3/4 '
						>
							<input
								placeholder="Search for a place..."
								className="border rounded-full border-gray-500 pl-2 h-full w-full"
								name='start'
								value={destination.points ? destination.points.formatted_address : destination.points}
							/>
						</Autocomplete>

						<button
							type='submit'
							onClick={handleSubmit}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3 w-1/4 h-full">
							Add to list +
						</button>
					</form>

					<div className="overflow-scroll h-[500px]">
						{locations.filter(filteredLocations).map(location => (<PlaceCard location={location} />))}


						{/* <div className="form-control pt-6">
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />
							<PlaceCard />

						</div>  */}
					</div>
				</div>
			</div >

		</>
	)

}

export default CreateMap