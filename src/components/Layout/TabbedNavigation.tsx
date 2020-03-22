import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { ContactMailOutlined, LocationOnOutlined, SearchOutlined } from "@material-ui/icons"
import { push } from "connected-react-router"
import React, { FC } from "react"
import { useAppDispatch, useAppState } from "../../hooks/useReduxState"
import { routePaths } from "../../routes"

export const TabbedNavigation: FC = () => {
    const { pathname } = useAppState(state => state.router.location)
    const dispatch = useAppDispatch()
    const handleClick = (route: string) => () => dispatch(push(route))

    return (
        <BottomNavigation value={pathname} className="sticky bottom-0 w-full text-black">
            <BottomNavigationAction
                className="text-black"
                label="Suche"
                value={routePaths.search()}
                onClick={handleClick(routePaths.search())}
                icon={<SearchOutlined />}
            />
            <BottomNavigationAction
                className="text-black"
                label="Kiez"
                value={routePaths.home()}
                onClick={handleClick(routePaths.home())}
                icon={<LocationOnOutlined />}
            />
            {/* <BottomNavigationAction
                className="text-black"
                label="Info"
                value={routePaths.home()}
                onClick={handleClick(routePaths.home())}
                icon={<InfoOutlined />}
            /> */}
            <BottomNavigationAction
                className="text-black"
                label="Kontakt"
                value={routePaths.contact()}
                onClick={handleClick(routePaths.contact())}
                icon={<ContactMailOutlined />}
            />
        </BottomNavigation>
    )
}
