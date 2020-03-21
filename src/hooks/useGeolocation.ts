import { useState, useEffect } from "react"

interface Position {
    latitude: number
    longitude: number
}

export const useGeolocation = (): Position => {
    // default coords for berlin
    const [state, setState] = useState<Position>({
        latitude: 52.520008,
        longitude: 13.404954
    })

    useEffect((): void => {
        navigator.geolocation.getCurrentPosition(onEvent)
    }, [])

    const onEvent = (event: {
        coords: { latitude: any; longitude: any }
    }): void => {
        setState({
            latitude: event.coords.latitude,
            longitude: event.coords.longitude
        })
    }
    return state
}
