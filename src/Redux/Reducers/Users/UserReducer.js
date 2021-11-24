import { END_SESSION, SET_SESSION, START_SESSION } from '../../Actions/index'

const initialState = {
    error: '',
    isLoading: false,
    loggedIn: {
        isAuthed: false,
        token: '',
        user: {
            // email: '',
            // password: '',
            role: '',
            user_id: '',
            username: ''
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(START_SESSION):
            return({
                ...state,
                isLoading: true
            })
        case(SET_SESSION):
            // console.log('REDUCER', 'state: ', state, 'action.payload', action.payload);
            return({
                ...state,
                isLoading: false,
                loggedIn: {
                    ...state.loggedIn,
                    isAuthed: true,
                    token: action.payload.token,
                    user: action.payload.user
                }
            })
        case(END_SESSION):
            return(initialState)
        default:
            return state
    }
}

export default reducer