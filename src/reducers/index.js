import { combineReducers } from 'redux'
import QuestionReducer from './QuestionReducer'
import AuthReducer from './AuthReducer'
import TimerReducer from "./TimerReducer";

const rootReducer = combineReducers({
    questions : QuestionReducer,
    auth: AuthReducer,
    questionDuration: TimerReducer
});

export default rootReducer
