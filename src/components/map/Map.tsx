import React from "react"
import { GoogleMap, withGoogleMap, Polygon } from "react-google-maps"
import { useGeolocation } from "../../hooks/useGeolocation"
import Modal from "../modal/Modal"
import { useState } from "react"
import { ModalProps } from "../modal/Modal"

export const Map = () => {
    const userGeolocation = useGeolocation()

    const [modal, setModal] = useState<ModalProps>()

    const handleOpen = ({ name, zip, shops, progress, links }: ModalProps) => () =>
        setModal({ name, zip, shops, progress, links })

    const handleClose = (): void => setModal(undefined)

    const data = [
        {
            lat: 52.520008,
            lng: 13.404954,
            zip: 30455,
            name: "Berlin",
            shops: 36,
            progress: 50,
            links: ["www.google.de"],
            polygon: [
                { lat: 12.364, lng: 53.207 }, // north west
                { lat: 15.364, lng: 53.207 }, // south west
                { lat: 15.364, lng: 58.207 }, // south east
                { lat: 12.364, lng: 58.207 } // north east
            ]
        },
        {
            lat: 52.520009,
            lng: 13.404954,
            zip: 30455,
            name: "Hannover",
            shops: 16,
            progress: 77,
            links: ["www.google.de"],
            polygon: [
                { lat: 13.364, lng: 54.207 },
                { lat: 14.364, lng: 54.207 },
                { lat: 14.364, lng: 55.207 },
                { lat: 13.364, lng: 55.207 }
            ]
        },
        {
            lat: 52.520009,
            lng: 13.404954,
            zip: 30455,
            name: "Hannover",
            shops: 16,
            progress: 77,
            links: ["www.google.de"],
            polygon: [
                { lat: 13.364, lng: 56.207 },
                { lat: 14.364, lng: 56.207 },
                { lat: 14.364, lng: 57.207 },
                { lat: 13.364, lng: 57.207 }
            ]
        }
    ]

    const GoogleMaps = withGoogleMap(() => (
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
                    paths={path.polygon.map(({ lat, lng }) => ({ lng: lat, lat: lng }))}
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
    ))

    return (
        <div className="w-full h-full">
            <Modal
                name={modal?.name}
                zip={modal?.zip}
                shops={modal?.shops}
                progress={modal?.progress}
                links={modal?.links}
                close={handleClose}
            />
            <GoogleMaps containerElement={<div className="h-full" />} mapElement={<div className="h-full" />} />
        </div>
    )
}
