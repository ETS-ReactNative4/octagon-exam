import { combineReducers } from 'redux'
import QuestionReducer from './QuestionReducer'
import AuthReducer from './AuthReducer'
import TimerReducer from "./TimerReducer";
import SettingsReducer from "./SettingsReducer";

const rootReducer = combineReducers({
    questions : QuestionReducer,
    auth: AuthReducer,
    questionDuration: TimerReducer,
    settings: SettingsReducer
});

export default rootReducer
