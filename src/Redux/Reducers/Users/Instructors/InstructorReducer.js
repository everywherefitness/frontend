import { FETCH_INST_CLASSES, SET_INST_CLASSES } from '../../../Actions/index'

const initialState = {
    isLoading: false,
    classes: {
        created: []
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_INST_CLASSES):
            return({
                ...state,
                isLoading: true
            })
        case(SET_INST_CLASSES):
            return({
                ...state,
                isLoading: false,
                classes: {
                    created: action.payload
                }
            })
        default:
            return state
    }
}

export default reducer