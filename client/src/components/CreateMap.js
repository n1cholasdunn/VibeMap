import CategorySearch from "./CategorySearch"
import GMap from "./GMap"
import '../App.css';

function CreateMap() {

	const handleAddPlace = (place, name) => {
		console.log(destination.tags)
		console.log(place)
		const { geometry } = place;
		if (geometry) {
			const { lat, lng } = geometry.location;
			console.log(place, name)
			setDestination((prevDestination) => ({
				...prevDestination,
				// type: selectedTripOption,
				[name]: {
					// name: place.name,
					lat: lat(),
					lng: lng()
				}
			}));
		}
	};

	return (
		<div className="flex flex-row justify-between border-dashed border-2 border-green-800 p-2.5">
			<div className="flex flex-col justify-end">
				<GMap>

				</GMap>
				<button
					type='submit'
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">
					Save Map!
				</button>
			</div>
			<CategorySearch />

		</div>
	)

}

export default CreateMap