import { combineReducers } from 'redux'

import classesReducer from './classesReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    classes: classesReducer,
    users: usersReducer
})