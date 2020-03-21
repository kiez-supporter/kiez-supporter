import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { FavoriteBorderOutlined, LocationOnOutlined, PersonOutlined } from "@material-ui/icons"
import React, { FC } from "react"
import { useAppDispatch, useAppState } from "../../hooks/useReduxState"
import { routePaths } from "../../routes"
import { push } from "connected-react-router"

export const TabbedNavigation: FC = () => {
    const { pathname } = useAppState(state => state.router.location)
    const dispatch = useAppDispatch()
    const handleClick = (route: string) => () => dispatch(push(route))

    return (
        <BottomNavigation value={pathname} className="sticky bottom-0 w-full text-black">
            <BottomNavigationAction
                className="text-black"
                label="Favorites"
                value={routePaths.favorites()}
                onClick={handleClick(routePaths.favorites())}
                icon={<FavoriteBorderOutlined />}
            />
            <BottomNavigationAction
                className="text-black"
                label="Kiez"
                value={routePaths.home()}
                onClick={handleClick(routePaths.home())}
                icon={<LocationOnOutlined />}
            />
            <BottomNavigationAction
                className="text-black"
                label="Profile"
                value={routePaths.profile()}
                onClick={handleClick(routePaths.profile())}
                icon={<PersonOutlined />}
            />
        </BottomNavigation>
    )
}
