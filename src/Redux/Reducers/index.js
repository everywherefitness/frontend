import {
    FETCH_AVAILABLES,
    SET_AVAILABLES,
    FETCH_ENROLLED,
    SET_ENROLLED,
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
            classes: {
                availables: [],
                enrolled: []
            },
            user: {
                role: '',
                user_id: '',
                username: '',
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
                isAuthed: true,
                isLoading: false,
                session: {
                    ...state.session,
                    token: action.payload.token,
                    user: action.payload.user
                }
            })
        case(SESSION_END):
            return(initialState)
    
        // -------------- //

        case(FETCH_AVAILABLES):
            return({
                ...state,
                isLoading: true
            })
        case(SET_AVAILABLES):
            return({
                ...state,
                isLoading: false,
                session: {
                    ...state.session,
                    classes: {
                        ...state.session.classes,
                        availables: action.payload
                    }
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
                session: {
                    ...state.session,
                    classes: {
                        ...state.session.classes,
                        enrolled: action.payload
                    }
                }
            })
        default:
            return state
    }
}

export default reducer