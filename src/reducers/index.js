import { combineReducers } from 'redux'
import QuestionReducer from './QuestionReducer'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
    questions : QuestionReducer,
    auth: AuthReducer,
});

export default rootReducer
