import React, { FC } from "react"
import GoogleMapReact from "google-map-react"
import { useGeolocation } from "../../hooks/useGeolocation"

export const Map: FC = () => {
    const userGeolocation = useGeolocation()
    return (
        <div className="w-full h-full">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyC2hJYITb8r-BkWQil21x7KFT3wJe8NP5E"
                }}
                center={{
                    lat: userGeolocation.latitude,
                    lng: userGeolocation.longitude
                }}
                defaultZoom={11}
            />
        </div>
    )
}
