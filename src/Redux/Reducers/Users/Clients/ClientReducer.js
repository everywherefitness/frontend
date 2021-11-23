import {
    FETCH_AVAILABLES,
    FETCH_ENROLLED,
    SET_AVAILABLES,
    SET_ENROLLED } 
from './../../../Actions/index'

const initialState = {
    isLoading: false,
    classes: {
        availables: [],
        enrolled: []
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_AVAILABLES):
            return({
                ...state,
                isLoading: true
            })
        case(SET_AVAILABLES):
            return({
                ...state,
                isLoading: false,
                classes: {
                    ...state.classes,
                    availables: action.payload
                }
            })

        case(FETCH_ENROLLED):
            return({
                ...state,
                isLoading: true
            })
        case(SET_ENROLLED):
            return({
                ...state,
                isLoading: false,
                classes: {
                    ...state.classes,
                    enrolled: action.payload
                }
            })
        default:
            return state
    }
}

export default reducer