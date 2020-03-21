import React from "react"
import { GoogleMap, withGoogleMap, Polygon } from "react-google-maps"
import { useGeolocation } from "../../hooks/useGeolocation"

export const Map = withGoogleMap(() => {
    const userGeolocation = useGeolocation()

    // Define the LatLng coordinates for the outer path.
    const polygon = [
        [
            { lat: 12.364, lng: 53.207 }, // north west
            { lat: 15.364, lng: 53.207 }, // south west
            { lat: 15.364, lng: 58.207 }, // south east
            { lat: 12.364, lng: 58.207 } // north east
        ],
        [
            { lat: 13.364, lng: 54.207 },
            { lat: 14.364, lng: 54.207 },
            { lat: 14.364, lng: 55.207 },
            { lat: 13.364, lng: 55.207 }
        ],
        [
            { lat: 13.364, lng: 56.207 },
            { lat: 14.364, lng: 56.207 },
            { lat: 14.364, lng: 57.207 },
            { lat: 13.364, lng: 57.207 }
        ]
    ]

    return (
        <div className="w-full h-full">
            <GoogleMap
                center={{
                    lat: userGeolocation.latitude,
                    lng: userGeolocation.longitude
                }}
                defaultZoom={11}
            >
                {polygon.map((path, index) => (
                    <Polygon
                        key={index}
                        paths={path.map(({ lat, lng }) => ({ lng: lat, lat: lng }))}
                        options={{
                            fillColor: "#476a47",
                            fillOpacity: 0.4,
                            strokeColor: "#000",
                            strokeOpacity: 1,
                            strokeWeight: 1
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
})
