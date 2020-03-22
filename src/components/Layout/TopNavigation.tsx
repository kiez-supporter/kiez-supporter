import React from "react"
import { useAppDispatch } from "../../hooks/useReduxState"
import { routePaths } from "../../routes"
import { push } from "connected-react-router"
import logo from "./assets/logo.png"

export const TopNavigation = () => {
    const dispatch = useAppDispatch()
    const handleClick = (route: string) => () => dispatch(push(route))

    return (
        <div className="absolute top-0 z-70 p-5">
            <button onClick={handleClick(routePaths.home())} value={routePaths.home()}>
                <img src={logo} alt="Kiez Support Logo" title="Kiez Support Logo" className="w-48" />
            </button>
        </div>
    )
}
