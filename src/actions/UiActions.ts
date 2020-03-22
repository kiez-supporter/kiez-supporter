import { ModalProps } from "../components/modal/Modal"
import { MainThunkDispatch } from "../reducers"
import { UiType } from "./Types"

export const setModal = (modal: ModalProps) => (dispatch: MainThunkDispatch) => {
    dispatch({ type: UiType.setModal, payload: modal })
}

export const resetModal = () => (dispatch: MainThunkDispatch) => {
    dispatch({ type: UiType.setModal, payload: undefined })
}
