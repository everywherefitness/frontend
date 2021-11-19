export const SESSION_START = 'SESSION_START'
export const SESSION_SET = 'SESSION_SET'
export const SESSION_END = 'SESSION_END'

export const sessionStart = () => {
    return({ type: SESSION_START })
}

export const sessionSet = (session) => {
    // console.log('ACTIONS', session)
    return({ type: SESSION_SET, payload: session})
}

export const sessionEnd = () => {
    return({ type: SESSION_END })
}

// ------------------------ //

// revist and possibly create one FETCH command
export const FETCH_AVAILABLES = 'FETCH_AVAILABLES'
export const SET_AVAILABLES = 'SET_AVAILABLES'
export const FETCH_ENROLLED = 'FETCH_ENROLLED'
export const SET_ENROLLED = 'SET_ENROLLED'

export const fetchAvailables = () => {
    return({ type: FETCH_AVAILABLES })
}

export const setAvailables = (availables) => {
    return({ type: SET_AVAILABLES, payload: availables })
}

export const fetchEnrolled = () => {
    return({ type: FETCH_ENROLLED })
}

export const setEnrolled = (enrolled) => {
    return({ type: SET_ENROLLED, payload: enrolled })
}