import React, { FC } from "react"
import { TabbedNavigation } from "./TabbedNavigation"

export const Layout: FC = ({ children }) => {
    return (
        <div className="grid min-h-screen grid-rows-10">
            <div className="row-span-9">{children}</div>
            <div className="row-span-1 flex items-end content-end justify-end">
                <TabbedNavigation />
            </div>
        </div>
    )
}
