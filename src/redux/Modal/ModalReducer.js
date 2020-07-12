import {
    MODAL_OPEN,
    MODAL_CLOSE
} from './ModalTypes'
const INITIAL_STATE =  null;

const ModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            const {
                modalType, modalProps
            } = action.payload
            return { modalType , modalProps};
        case MODAL_CLOSE:
            return null
        default:
            return state
    }
}
export default ModalReducer