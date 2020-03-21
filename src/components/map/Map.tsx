import React from "react"
import { GoogleMap, Polygon, withGoogleMap } from "react-google-maps"
import { setModal } from "../../actions/UiActions"
import { useGeolocation } from "../../hooks/useGeolocation"
import { useAppDispatch } from "../../hooks/useReduxState"
import { ModalProps } from "../modal/Modal"

interface MapProps {
    data: {
        zip: number
        name: string
        shops?: number
        progress?: number
        links?: string[]
        polygon: { lat: number; lng: number }[]
    }[]
}

export const Map = withGoogleMap<MapProps>(({ data }) => {
    const userGeolocation = useGeolocation()
    const dispatch = useAppDispatch()

    const handleOpen = (modal: ModalProps) => () => dispatch(setModal(modal))

    return (
        <div className="w-full h-full">
            <GoogleMap
                center={{
                    lat: userGeolocation.latitude,
                    lng: userGeolocation.longitude
                }}
                defaultZoom={11}
            >
                {data.map((path, index) => (
                    <Polygon
                        onClick={handleOpen({
                            name: path.name,
                            zip: path.zip,
                            shops: path.shops,
                            progress: path.progress,
                            links: path.links
                        })}
                        key={index}
                        paths={path.polygon}
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
