import {
    SESSION_END,
    SESSION_SET,
    SESSION_START,
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
        case(SESSION_END):
            return(initialState)
        default:
            return state
    }
}

export default reducer