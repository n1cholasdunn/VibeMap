import CategorySearch from "./CategorySearch"

function CreateMap() {
    return (
        <div className="flex flex-row justify-between border-dashed border-2 border-green-800 p-2.5">
            <div
                id="map-box"
                className="border-dashed border-2 border-green-800 h-60  w-48 p-2.5"
            >
                <div className="border-dashed border-2 border-green-800">
                    MAP GOES HERE
                </div>
            </div>
            <CategorySearch />
        </div>
    )
}

export default CreateMap