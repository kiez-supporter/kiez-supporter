import React, { FC } from "react"
import { Map } from "../components/map/Map"

export const Home: FC = () => {
    return (
        <div className="h-full rounded">
            <Map containerElement={<div className="h-full" />} mapElement={<div className="h-full" />} />
        </div>
    )
}
