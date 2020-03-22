import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import { LocationOnOutlined, InfoOutlined, ContactMailOutlined, SearchOutlined } from "@material-ui/icons"
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
                label="Search"
                value={routePaths.search()}
                onClick={handleClick(routePaths.search())}
                icon={<SearchOutlined />}
            />
            <BottomNavigationAction
                className="text-black"
                label="Kiez"
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
