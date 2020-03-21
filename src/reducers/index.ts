import {
    connectRouter,
    RouterAction,
    RouterState
} from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AuthReducer, AuthState, AuthAction } from "./auth"

export type MainAction = RouterAction | AuthAction

export type MainThunkResult<R> = ThunkAction<R, State, undefined, MainAction>
export type MainThunkDispatch = ThunkDispatch<State, undefined, MainAction>

export interface State {
    router: RouterState
    auth: AuthState
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: AuthReducer
    })
