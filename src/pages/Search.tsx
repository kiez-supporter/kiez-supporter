import React, { FC } from "react"
import { routePaths } from "../routes"
import { useAppDispatch } from "../hooks/useReduxState"
import { push } from "connected-react-router"
import { HomeProps } from "./Home"
import { Position } from "../hooks/useGeolocation"
import { LocationSearchingOutlined } from "@material-ui/icons"

export const Search: FC = () => {
    const dispatch = useAppDispatch()
    const handleRouting = (route: string, position: Position) => () => {
        dispatch(
            push<HomeProps>(route, { position })
        )
    }

    return (
        <div className="flex flex-col py-4">
            <button
                className="rounded border py-2 mb-2 mx-3 bg-orange-200 flex justify-between px-4"
                onClick={handleRouting(routePaths.home(), { latitude: 52.520008, longitude: 13.404954 })}
            >
                <span>Berlin</span> <LocationSearchingOutlined />
            </button>
            <button
                className="rounded border py-2 mb-2 mx-3 bg-orange-200 flex justify-between px-4"
                onClick={handleRouting(routePaths.home(), { latitude: 48.369897, longitude: 10.894913 })}
            >
                <span>Augsburg</span> <LocationSearchingOutlined />
            </button>
        </div>
    )
}
