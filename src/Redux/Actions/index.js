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