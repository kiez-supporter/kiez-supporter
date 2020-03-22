import React, { FC } from "react"
import { TabbedNavigation } from "./TabbedNavigation"
import { TopNavigation } from "./TopNavigation"

export const Layout: FC = ({ children }) => {
    return (
        <div className="grid min-h-screen grid-rows-layout">
            <div className="row-span-1 flex items-center ">
                <TopNavigation />
            </div>
            <div className="row-span-10">{children}</div>
            <div className="row-span-1 pb-4">
                <TabbedNavigation />
            </div>
        </div>
    )
}
