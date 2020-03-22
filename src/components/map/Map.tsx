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

export const Map = withScriptjs<MapProps & WithGoogleMapProps & WithScriptjsProps>(
    withGoogleMap(({ data }) => {
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

        const between = (x: number, min: number, max: number): boolean => x >= min && x <= max

        const getColor = (progress: number): string => {
            if (between(progress, 0, 10)) {
                return "#C53030"
            }
            if (between(progress, 10, 20)) {
                return "#E53E3E"
            }
            if (between(progress, 20, 30)) {
                return "#F56565"
            }
            if (between(progress, 30, 40)) {
                return "#FC8181"
            }
            if (between(progress, 40, 50)) {
                return "#FEB2B2"
            }
            if (between(progress, 50, 60)) {
                return "#C6F6D5"
            }
            if (between(progress, 60, 70)) {
                return "#9AE6B4"
            }
            if (between(progress, 70, 80)) {
                return "#68D391"
            }
            if (between(progress, 80, 90)) {
                return "#48BB78"
            }
            if (between(progress, 90, 100)) {
                return "#38A169"
            }
            return "#C53030"
        }

        return (
            <div className="w-full h-full">
                <GoogleMap
                    defaultCenter={{
                        lat: userGeolocation.latitude,
                        lng: userGeolocation.longitude
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
                                progress: path.progress,
                                links: path.links
                            })}
                            key={index}
                            paths={path.polygon}
                            options={{
                                fillColor: getColor(path.progress || Math.floor(Math.random() * (100 - 0 + 1) + 0)),
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
