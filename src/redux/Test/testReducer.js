const INITIAL_STATE = {
    data: 43
}

const TestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                data: state.data + 1
            }
            case 'DECREMENT_COUNTER':
                return {
                    ...state,
                    data: state.data - 1
                }

                default:
                    return state
    }
}

export default TestReducer;