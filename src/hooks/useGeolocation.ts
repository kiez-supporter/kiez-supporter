import { useState, useEffect } from "react"

export interface Position {
    latitude: number
    longitude: number
}

export const useGeolocation = (): Position => {
    // default coords for berlin
    const [state, setState] = useState<Position>({
        latitude: 52.520008,
        longitude: 13.404954
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onEvent)
    }, [])

    const onEvent = ({ coords: { latitude, longitude } }: { coords: Position }): void => {
        setState({
            latitude,
            longitude
        })
    }
    return state
}
