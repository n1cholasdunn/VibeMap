function PlaceCard({ location }) {
    return (
        <>
            <div className="cursor-pointer label border-solid border-gray-200 border mt-3">

                <div flex flex-col >
                    <div className="font-semibold text-lg">{location.name}</div>
                    <div className="font-medium text-md">Vibe: </div>
                    <div className="flex flex-row">
                        {location.categories.map((category) => (
                            <p className="pr-2 text-sm">{category}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <input type="checkbox" checked="checked" className="checkbox checkbox-success" />

                </div>
            </div >
        </>
    )
}

export default PlaceCard