import * as ActionTypes from "../constants/ActionTypes";

export default function TimerReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.INCREMENT_PER_QUESTION_TIMER :
            return  {...state, counter: action.counter};
        case ActionTypes.SET_START_TO_FALSE :
            return  {...state, start: action.start};
        default:
            return state
    }
}