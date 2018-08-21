import * as ActionTypes from "../constants/ActionTypes";

export function resetPerQuestionTimer(){
    return { type: ActionTypes.RESET_PER_QUESTION_TIMER,  counter: 0}
}

export function hideQuestionTimer(){
    return { type: ActionTypes.HIDE_QUESTION_TIMER,  show: false}
}

export function showQuestionTimer(){
    return { type: ActionTypes.SHOW_QUESTION_TIMER,  show: true}
}

export function incrementPerQuestionTimer(){
    return { type: ActionTypes.INCREMENT_PER_QUESTION_TIMER}
}

export function setStartToFalse(){
    return { type: ActionTypes.SET_START_TO_FALSE, start: false}
}


