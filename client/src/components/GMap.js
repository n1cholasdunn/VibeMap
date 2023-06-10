import { GoogleMap, Marker, useLoadScript, DirectionsRenderer, MarkerClusterer, InfoBoxF, InfoWindow } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import "../App.css";
import locations from "../db.json"
import { getInitColorSchemeScript } from "@mui/material";
import MapInfoWindow from "./MapInfoWindow";


function GMap() {
    const { isLoaded, loadError } = useLoadScript({
    });

    const markersObj = {
        type: 'oneWay',
        route: {
            start: {
                name: "A",
                lat: 40.4168,
                lng: -3.70383,
            },
            midPoint: {
                name: "B",
                lat: 41.6488,
                lng: -0.8891,
            },
            end: {
                name: "C",
                lat: 41.3851,
                lng: 2.1734,
            }
        },
    };

    const generateEndPoint = () => {
        if (markersObj.type === 'singleDestination') {
            return null
        } else if (markersObj.type === 'oneWay') {
            return { lat: markersObj.route.end.lat, lng: markersObj.route.end.lng }
        }
        else if (markersObj.type === 'loopTrip') {
            return { lat: markersObj.route.start.lat, lng: markersObj.route.start.lng }
        }
    }

    const generateWaypoints = () => {
        if (markersObj.type === 'singleDestination' || markersObj.type === 'oneWay') {
            return null
        } else {
            return [
                { location: `${markersObj.route.midPoint.lat},${markersObj.route.midPoint.lng}` },
                { location: `${markersObj.route.end.lat},${markersObj.route.end.lng}` }
            ]
        }
    }

    const center = useMemo(() => ({ lat: markersObj.route.start.lat, lng: markersObj.route.start.lng }), []);

    const [directions, setDirections] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        if (isLoaded) {
            const directionsService = new window.google.maps.DirectionsService();
            const start = { lat: markersObj.route.start.lat, lng: markersObj.route.start.lng };
            // console.log('start: ', start)
            // console.log('end: ', generateEndPoint())
            directionsService.route(
                {
                    origin: start,
                    destination: generateEndPoint(),
                    waypoints: generateWaypoints(),
                    optimizeWaypoints: true,
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirections(result);
                    } else {
                        console.error(`Error fetching directions ${result}`);
                    }
                }
            );
        }
    }, [isLoaded]);
    if (loadError) {
        return <div>Error loading Google Maps</div>;

    }

    return (
        <div className="border-dashed border-2 border-green-800 h-96  w-96 p-2.5">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
                    {directions && (
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                polylineOptions: {
                                    strokeColor: "blue",
                                },
                            }}
                        />
                    )}

                    {/* for each market in markersobj, render Marker */}
                    <Marker
                        position={{ lat: markersObj.route.start.lat, lng: markersObj.route.start.lng }}
                        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                    />
                    <Marker
                        position={{ lat: markersObj.route.midPoint.lat, lng: markersObj.route.midPoint.lng }}
                        icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
                    />
                    <Marker
                        position={{ lat: markersObj.route.end.lat, lng: markersObj.route.end.lng }}
                        icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                    />

                    {locations.map(location => (
                        <Marker
                            key={location.name}
                            position={{
                                lat: location.lat,
                                lng: location.lng
                            }}
                            onClick={() => {
                                setSelectedLocation(location)
                            }}
                        />
                    ))}
                    {selectedLocation && (
                        <InfoWindow
                            position={{
                                lat: selectedLocation.lat,
                                lng: selectedLocation.lng
                            }}
                            onCloseClick={() => {
                                setSelectedLocation(null);
                            }}
                        >
                            <MapInfoWindow selectedLocation={selectedLocation}></MapInfoWindow>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </div>
    );
}

export default GMap;
