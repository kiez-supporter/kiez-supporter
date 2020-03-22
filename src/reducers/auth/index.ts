import { Reducer } from "redux"

export interface AuthState {}

export type AuthAction = any

const initialState: AuthState = {}

export const AuthReducer: Reducer<AuthState, AuthAction> = (
    state = initialState,
    action
): AuthState => {
    switch (action.type) {
        default:
            return state
    }
}
