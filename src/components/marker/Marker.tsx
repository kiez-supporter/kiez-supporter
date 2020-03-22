import React, { FC } from "react"

interface MarkerProps {
    lat: number
    lng: number
    shops: number
}

export const Marker = ({ lat, lng, shops }: MarkerProps) => {
    return (
        <div className="bg-green-500 absolute top-0 left-0 w-10 h-10 rounded">
            <div className="text-center text-2xl p-1">
                <span>{shops}</span>
            </div>
        </div>
    )
}
