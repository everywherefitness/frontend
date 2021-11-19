import {
    SESSION_SET,
    SESSION_START,
    SESSION_SUCCESS
} from '../Actions/index'

const initialState = {
        error: '',
        isLoading: false,
        isAuthed: false,
        session: {
            token: '',
            user: {
                role: '',
                user_id: '',
                username: ''
            }
        }
    }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(SESSION_START):
            return({
                ...state,
                isLoading: true
            })
        case(SESSION_SET):
            // console.log('REDUCER', 'state: ', state, 'action.payload', action.payload);
            return({
                ...state,
                error: '',
                isAuthed: true,
                isLoading: false,
                session: {
                    token: action.payload.token,
                    user: action.payload.user
                }
            })
        case(SESSION_SUCCESS):
            return({
                ...state,
                isAuthed: true,
                isLoading: false,
                user: action.payload
            })
        default:
            return state
    }
}

export default reducer