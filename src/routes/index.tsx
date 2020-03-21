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
import { Redirect, Route, Switch } from "react-router"
import { Home } from "../pages/Home"

interface RoutePaths {
    home: () => string
}

interface RouteInfo {
    component: any
    exact?: boolean
}

export const routePaths: RoutePaths = Object.freeze<RoutePaths>({
    home: () => "/"
})

export const routeMap = (() => {
    const websiteRoutes: [string, RouteInfo][] = [
        [
            routePaths.home(),
            {
                component: () => <Home></Home>,
                exact: true
            }
        ]
    ]

    const routeList = [...websiteRoutes]

    return routeList
})().map(([path, { component, exact }]) => (
    <Route key={path} path={path} render={component} exact={exact} />
))

export const Routes = () => {
    return (
        <Switch>
            {routeMap}
            <Redirect to={routePaths.home()} />
        </Switch>
    )
}