import * as ActionTypes from "../constants/ActionTypes";

export default function TimerReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.INCREMENT_PER_QUESTION_TIMER :
            let counter = isNaN(state.counter) ? 0 : state.counter;
            return  {...state, counter: counter + 1};
        case ActionTypes.SET_START_TO_FALSE :
            return  {...state, start: action.start};
        case ActionTypes.RESET_PER_QUESTION_TIMER :
            return {...state, counter: 0};
        case ActionTypes.HIDE_QUESTION_TIMER :
            return {...state, show: action.show};
        case ActionTypes.SHOW_QUESTION_TIMER :
            return {...state, show: action.show};
        default:
            return state
    }
}