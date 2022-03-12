import {combineReducers} from 'redux'
import contactReducer from './contactReducer' 
import educationReducer from './educationReducer'
import skillsReducer from './skillsReducer'
import summaryReducer from './summaryReducer'
import workReducer from './workReducer'
import finalizeReducer from './finalizeReducer'
import userReducer from './userReducer'
const rootReducer = combineReducers({
    contactReducer,
    educationReducer,
    skillsReducer,
    summaryReducer,
    workReducer,
    finalizeReducer,
    userReducer

})
export default rootReducer