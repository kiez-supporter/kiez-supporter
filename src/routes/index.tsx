/**
 * Central routing system
 * All possible routes are managed here, routes are provided
 * with appropriate redirects or an associated view component.
 *
 * Routes that require user data (from authentication) should
 * be wrapped in Auth, and routes that should _only_ appear when
 * a user is not authenticated should be wrapped in skip auth
 * (such they redirect when the user is authenticated). All other
 * routes are accessed regardless.
 *
 * Currently, viewing some routes triggers calls to the APIs to
 * fetch the appropriate data for the view (such as the list of
 * API instances for a user).
 */

import React from "react"
import { Redirect, Route, RouteComponentProps, Switch } from "react-router"
import { Home, HomeProps } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { Search } from "../pages/Search"
import { Contact } from "../pages/Contact"

interface RoutePaths {
    home: () => string
    search: () => string
    profile: () => string
    contact: () => string
}

interface RouteInfo {
    component: any
    exact?: boolean
}

export const routePaths: RoutePaths = Object.freeze<RoutePaths>({
    home: () => "/",
    search: () => "/search",
    profile: () => "/profile",
    contact: () => "/contact"
})

export const routeMap = (() => {
    const websiteRoutes: [string, RouteInfo][] = [
        [
            routePaths.home(),
            {
                component: ({ location }: RouteComponentProps<{}, {}, HomeProps>) => {
                    return (
                        <Home position={location?.state?.position || { latitude: 52.520008, longitude: 13.404954 }} />
                    )
                },
                exact: true
            }
        ],
        [
            routePaths.search(),
            {
                component: () => <Search />,
                exact: true
            }
        ],
        [
            routePaths.contact(),
            {
                component: () => <Contact />,
                exact: true
            }
        ],
        [
            routePaths.profile(),
            {
                component: () => <Profile />,
                exact: true
            }
        ]
    ]

    const routeList = [...websiteRoutes]

    return routeList
})().map(([path, { component, exact }]) => <Route key={path} path={path} render={component} exact={exact} />)

export const Routes = () => {
    return (
        <Switch>
            {routeMap}
            <Redirect to={routePaths.home()} />
        </Switch>
    )
}
