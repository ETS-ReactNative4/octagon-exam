import { combineReducers } from 'redux'
import QuestionReducer from './QuestionReducer'

const rootReducer = combineReducers({
/*    todos,*/
    questions : QuestionReducer
});

export default rootReducer
