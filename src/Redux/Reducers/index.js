import { combineReducers } from 'redux'

import UserReducer from './Users/UserReducer'
import ClientReducer from './Users/Clients/ClientReducer'
import InstructorReducer from './Users/Instructors/InstructorReducer'

export default combineReducers({
    session: UserReducer,
    client: ClientReducer,
    instructor: InstructorReducer
})