function MapInfoWindow({ selectedLocation }) {

    const addToMap = () => {
        // add location clicked to faves
        // once clicked, change icon to heart
    }

    return (
        <div className="h-24 flex-column justify-between">
            <h4>{selectedLocation.name}</h4>
            <p>{selectedLocation.info}</p>
            <div>
                Vibe: {selectedLocation.categories}
            </div>
            <button onClick={addToMap()}>Add to Map+</button>
        </div>
    )
}

export default MapInfoWindow