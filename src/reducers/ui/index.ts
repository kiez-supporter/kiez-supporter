import { Reducer } from "redux"
import { ModalProps } from "../../components/modal/Modal"
import { UiType } from "../../actions/Types"

export interface UiState {
    modal?: ModalProps
}

export interface SetModalAction {
    type: UiType.setModal
    payload: ModalProps
}

export type UiAction = SetModalAction

const initialState: UiState = {}

export const UiReducer: Reducer<UiState, UiAction> = (state = initialState, action): UiState => {
    switch (action.type) {
        case UiType.setModal:
            return { ...state, modal: action.payload }
        default:
            return state
    }
}
