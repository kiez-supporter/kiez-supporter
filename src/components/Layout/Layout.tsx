import React, { FC } from "react"
import { TabbedNavigation } from "./TabbedNavigation"

export const Layout: FC = ({ children }) => {
    return (
        <>
            <div className="min-h-screen">{children}</div>
            <TabbedNavigation />
        </>
    )
}
