import React, { FC } from "react"
import { Map } from "../components/map/Map"
import Modal from "../components/modal/Modal"
import { useAppState } from "../hooks/useReduxState"
import json from "../csvjson.json"

export const Home: FC = () => {
    const modal = useAppState(state => state.ui.modal)
    return (
        <div className="h-full rounded">
            <Modal
                name={modal?.name}
                zip={modal?.zip}
                shops={modal?.shops}
                progress={modal?.progress}
                links={modal?.links}
            />
            <Map containerElement={<div className="h-full" />} mapElement={<div className="h-full" />} data={json} />
        </div>
    )
}

// const data = [
//     {
//         lat: 52.520008,
//         lng: 13.404954,
//         zip: 30455,
//         name: "Berlin",
//         shops: 36,
//         progress: 50,
//         links: ["www.google.de"],
//         polygon: [
//             { lat: 12.364, lng: 53.207 }, // north west
//             { lat: 15.364, lng: 53.207 }, // south west
//             { lat: 15.364, lng: 58.207 }, // south east
//             { lat: 12.364, lng: 58.207 } // north east
//         ]
//     },
//     {
//         lat: 52.520009,
//         lng: 13.404954,
//         zip: 30455,
//         name: "Hannover",
//         shops: 16,
//         progress: 77,
//         links: ["www.google.de"],
//         polygon: [
//             { lat: 13.364, lng: 54.207 },
//             { lat: 14.364, lng: 54.207 },
//             { lat: 14.364, lng: 55.207 },
//             { lat: 13.364, lng: 55.207 }
//         ]
//     },
//     {
//         lat: 52.520009,
//         lng: 13.404954,
//         zip: 30455,
//         name: "Hannover",
//         shops: 16,
//         progress: 77,
//         links: ["www.google.de"],
//         polygon: [
//             { lat: 13.364, lng: 56.207 },
//             { lat: 14.364, lng: 56.207 },
//             { lat: 14.364, lng: 57.207 },
//             { lat: 13.364, lng: 57.207 }
//         ]
//     }
// ]
