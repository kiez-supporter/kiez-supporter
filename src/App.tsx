import { ConnectedRouter } from "connected-react-router"
import { History } from "history"
import React, { FC } from "react"
import { Routes } from "./routes"
import { Layout } from "./components/Layout/Layout"

interface Props {
    history: History
}

export const App: FC<Props> = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Layout>
                <Routes />
            </Layout>
        </ConnectedRouter>
    )
}
