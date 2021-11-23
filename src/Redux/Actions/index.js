export const START_SESSION = 'START_SESSION'
export const SET_SESSION = 'SET_SESSION'
export const END_SESSION = 'END_SESSION'

export const startSession = () => {
    return({ type: START_SESSION })
}

export const setSession = (session) => {
    // console.log('ACTIONS', session)
    return({ type: SET_SESSION, payload: session})
}

export const endSession = () => {
    return({ type: END_SESSION })
}

// ------------------------ //

// revist and possibly create one SET command
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

// ------------------------------ //

export const FETCH_INST_CLASSES = 'FETCH_INST_CLASSES'
export const SET_INST_CLASSES = 'SET_INST_CLASSES'

export const fetchInstClasses = () => {
    return({ type: FETCH_INST_CLASSES })
}

export const setInstClasses = (created) => {
    return({ type: SET_INST_CLASSES, payload: created })
} 