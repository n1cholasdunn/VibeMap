import CategorySearch from "./CategorySearch"
import GMap from "./GMap"
import '../App.css';


function CreateMap() {
    return (
        <div className="flex flex-row justify-between border-dashed border-2 border-green-800 p-2.5">
            <GMap />
            <CategorySearch />
        </div>
    )
}

export default CreateMap