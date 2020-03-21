import Auth, { CognitoUser } from "@aws-amplify/auth"
import Amplify from "@aws-amplify/core"
import { MainThunkDispatch } from "../reducers"

export const initAuth = () => async (dispatch: MainThunkDispatch) => {
    Amplify.configure({})

    try {
        const user: CognitoUser = await Auth.currentAuthenticatedUser()
        if (user) {
            await dispatch(getValidSession())
        }
    } catch (error) {}
}

export const getValidSession = () => async (
    dispatch: MainThunkDispatch
): Promise<string> => {
    try {
        const session = await Auth.currentSession()

        return session.getIdToken().getJwtToken()
    } catch (error) {
        throw Error("Invalid user session.")
    }
}
