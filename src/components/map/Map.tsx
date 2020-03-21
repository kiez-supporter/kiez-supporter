import React, { FC } from "react"
import GoogleMapReact from "google-map-react"
import { useGeolocation } from "../../hooks/useGeolocation"

export const Map: FC = () => {
    let userGeolocation = useGeolocation()
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyC2hJYITb8r-BkWQil21x7KFT3wJe8NP5E"
                }}
                center={{
                    lat: userGeolocation.latitude,
                    lng: userGeolocation.longitude
                }}
                defaultZoom={11}
            ></GoogleMapReact>
        </div>
    )
}
