export const SESSION_START = 'SESSION_START'
export const SESSION_SUCCESS = 'SESSION_SUCCESS'
export const SESSION_SET = 'SESSION_SET'

export const sessionStart = () => {
    return({ type: SESSION_START })
}

export const sessionSuccess = () => {
    return({ type: SESSION_SUCCESS })
}

export const sessionSet = (session) => {
    // console.log('ACTIONS', session)
    return({ type: SESSION_SET, payload: session})
}