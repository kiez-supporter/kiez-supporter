import React, { useRef } from "react"
import {
    GoogleMap,
    Marker,
    Polygon,
    withGoogleMap,
    withScriptjs,
    WithGoogleMapProps,
    WithScriptjsProps
} from "react-google-maps"
import { setModal } from "../../actions/UiActions"
import { useGeolocation, Position } from "../../hooks/useGeolocation"
import { useAppDispatch } from "../../hooks/useReduxState"
import { ModalProps } from "../modal/Modal"
import { getColor } from "../../helper/color"

interface MapProps {
    position: Position
    data: {
        zip: number
        name: string
        shops?: number
        progress?: number
        population: number
        link?: string[]
        polygon: { lat: number; lng: number }[]
    }[]
}

export const Map = withScriptjs<MapProps & WithGoogleMapProps & WithScriptjsProps>(
    withGoogleMap(({ data, position }) => {
        const userGeolocation = useGeolocation()
        const map = useRef<GoogleMap>(null)
        const dispatch = useAppDispatch()

        const handleOpen = (modal: ModalProps) => () => {
            // const bounds = map.current?.getBounds()
            // console.log({
            //     centerlat: bounds?.getCenter().lat(),
            //     centerlng: bounds?.getCenter().lng(),
            //     northeastlat: bounds?.getNorthEast().lat(),
            //     northeastlng: bounds?.getNorthEast().lng(),
            //     southeastlat: bounds?.getSouthWest().lat(),
            //     southeastlng: bounds?.getSouthWest().lng()
            // })
            dispatch(setModal(modal))
        }

        const calcProgress = (progress: number): number => (progress * 100) / 36000

        return (
            <div className="w-full h-full">
                <GoogleMap
                    defaultCenter={{
                        lat: position.latitude,
                        lng: position.longitude
                    }}
                    defaultZoom={11}
                    options={{
                        fullscreenControl: false
                    }}
                    ref={map}
                >
                    <Marker
                        icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
                        position={{
                            lat: userGeolocation.latitude,
                            lng: userGeolocation.longitude
                        }}
                    />
                    {data.map((path, index) => (
                        <Polygon
                            onClick={handleOpen({
                                name: path.name,
                                zip: path.zip,
                                shops: path.shops,
                                progress: calcProgress(path.population),
                                links: path.link
                            })}
                            key={index}
                            paths={path.polygon}
                            options={{
                                fillColor: getColor(calcProgress(Math.trunc(path.population || 0)), true),
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
)
